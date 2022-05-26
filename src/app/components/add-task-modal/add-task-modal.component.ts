import { Component, OnInit } from '@angular/core';

import { BoardsService } from 'src/app/services/boards.service';
import { Task, Priority } from './../../models/board.model';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss']
})

export class AddTaskModalComponent implements OnInit {

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

  ngOnInit(): void {
  }

  close(){
    this.boardService.$addTask.emit(false);
  }

  onAddTask(){
    this.boardService.addTask(this.boardService.modifyingBoard, {...this.taskToAdd});
    this.boardService.$addTask.emit(false);
    this.resetTask();
  }

}
