import { Component, OnInit } from '@angular/core';

import { BoardsService } from 'src/app/services/boards.service';
import { Task, Priority } from './../../models/board.model';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss']
})

export class AddTaskModalComponent implements OnInit {

  modifying: boolean = false;

  taskToAdd: Task = {
    id: 0,
    name: '',
    description: '',
    status: '',
    priority: Priority.unassigned
  };

  priorities = Object.keys({...Priority})

  constructor(
    private boardService:BoardsService
  ){
    if (this.boardService.modifyingTask === -1) {
      this.modifying = false;
      return;
    }
    this.modifying = true;
    this.taskToAdd = {...this.boardService.boards[this.boardService.modifyingBoard].tasks[this.boardService.modifyingTask]};
  }

  ngOnInit(): void {

  }

  resetTask(){
    this.taskToAdd = {
      id: 0,
      name: '',
      description: '',
      status: '',
      priority: Priority.unassigned
    };
  }

  close(){
    this.resetValues();
    this.boardService.$addTask.emit(false);
    this.resetTask();
  }

  resetValues(){
    this.modifying = false;
    this.boardService.modifyingBoard = -1;
    this.boardService.modifyingTask = -1;
  }

  onAddTask(){
    this.taskToAdd.status = this.taskToAdd.status === "" ? "none" : this.taskToAdd.status;

    if(this.modifying){
      this.boardService.boards[this.boardService.modifyingBoard].tasks[this.boardService.modifyingTask] = this.taskToAdd;
    }else{
      this.boardService.addTask(this.boardService.modifyingBoard, {...this.taskToAdd});
    }
    console.log(this.boardService.boards[this.boardService.modifyingBoard].tasks);

    this.resetValues();
    this.boardService.$addTask.emit(false);
    this.resetTask();


  }

}
