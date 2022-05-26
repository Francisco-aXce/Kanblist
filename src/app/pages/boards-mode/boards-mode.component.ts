import { Component, OnInit } from '@angular/core';
import { BoardsService } from 'src/app/services/boards.service';

@Component({
  selector: 'app-boards-mode',
  templateUrl: './boards-mode.component.html',
  styleUrls: ['./boards-mode.component.scss']
})
export class BoardsModeComponent implements OnInit {

  addTaskModal: boolean = false;

  constructor(
    private boardService:BoardsService
  ) { }

  ngOnInit(): void {
    this.boardService.$addTask.subscribe((value) => this.addTaskModal = value);
  }



}
