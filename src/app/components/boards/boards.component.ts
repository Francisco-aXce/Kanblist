import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

import { Board } from './../../models/board.model';
import { BoardsService } from './../../services/boards.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  boards: Board[] = [];

  canDrag: boolean = true;

  addTaskModal: boolean = false;

  constructor(
    private boardsService:BoardsService
  ) {
    this.boards = boardsService.getAllBoards();
  }

  ngOnInit(): void {
    this.boardsService.$addTask.subscribe((value) => this.addTaskModal = value);
  }

  changeDrag(value: boolean) {
    this.canDrag = value;
  }

  moveBoard(drop: CdkDragDrop<Board>) {
    const { previousIndex, currentIndex } = drop;

    if (previousIndex === currentIndex) return;

    this.boardsService.reorganizeBoard(this.boards, previousIndex, currentIndex);
  }

}
