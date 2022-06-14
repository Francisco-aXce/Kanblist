import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';

import { BoardsService } from 'src/app/services/boards.service';
import { Task, Priority } from './../../models/board.model';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss']
})

export class AddTaskModalComponent implements OnInit {

  modifying: boolean = false;

  form!: FormGroup;

  priorities = Object.keys({...Priority})

  constructor(
    private boardService:BoardsService,
    private formBuilder:FormBuilder
  ){
    if (this.boardService.modifyingTask === -1) {
      this.modifying = false;
      this.buildForm();
      return;
    }
    this.modifying = true;
    this.buildForm(this.boardService.boards[this.boardService.modifyingBoard].tasks[this.boardService.modifyingTask]);
  }

  ngOnInit(): void {
  }

  private buildForm(initial?:Task){
    this.form = this.formBuilder.group({
    name: [initial?.name === undefined ? '' : initial?.name, [Validators.required]],
    description: [initial?.description === undefined ? '' : initial?.description],
    priority: [initial?.priority === undefined ? Priority.unassigned : initial.priority],
    status: [initial?.status === undefined ? '' : initial.status, [Validators.maxLength(8)]]
    })
  }

  get nameInvalid() {
    return this.form.get('name')?.touched && this.form.get('name')?.invalid;
  }

  close(){
    this.resetValues();
    this.boardService.$addTask.emit(false);
  }

  resetValues(){
    this.modifying = false;
    this.boardService.modifyingBoard = -1;
    this.boardService.modifyingTask = -1;
  }

  onAddTask(){

    this.form.markAllAsTouched();

    if(this.form.invalid) return;

    let task:Task = {id:0,
    ...this.form.value};

    task.status = task.status === '' ? 'none' : task.status;

    if(this.modifying){
      task.id = this.boardService.modifyingTask;
      this.boardService.boards[this.boardService.modifyingBoard].tasks[this.boardService.modifyingTask] = task;
    }else{
      this.boardService.addTask(this.boardService.modifyingBoard, task);
    }

    this.resetValues();
    this.boardService.$addTask.emit(false);
  }

}
