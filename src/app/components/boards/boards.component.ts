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

  constructor(
    private boardsService:BoardsService
  ) {
    this.boards = boardsService.getAllBoards();
  }

  ngOnInit(): void {
  }

}
