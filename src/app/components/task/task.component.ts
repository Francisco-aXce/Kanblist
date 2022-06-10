import { Component, OnInit, Input } from '@angular/core';

import { BoardsService } from './../../services/boards.service';
import { Task, Priority } from './../../models/board.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  more = document.getElementById('moreButton');

  showOptions = false;

  @Input() task: Task = {
    id: 0,
    name: '',
    description: '',
    status: '',
    priority: Priority.unassigned
  };

  @Input() boardId: number = -1;

  constructor(
    private boardService:BoardsService
    ) { }

  ngOnInit(): void {

  }

  toggleOptions()
  {
    this.showOptions = !this.showOptions;
  }

  duplicate() {
    this.boardService.addTask(this.boardId, this.task);
    this.showOptions = false;
  }

  edit() {
    this.boardService.modifyingBoard = this.boardId;
    this.boardService.modifyingTask = this.task.id;
    this.boardService.$addTask.emit(true);
    this.showOptions = false;
  }

  delete(){
    this.boardService.deleteTask(this.boardId, this.task.id);
  }

}
