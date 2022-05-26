import { Component, OnInit } from '@angular/core';

import { BoardsService } from './../../services/boards.service';

@Component({
  selector: 'app-add-board',
  templateUrl: './add-board.component.html',
  styleUrls: ['./add-board.component.scss']
})
export class AddBoardComponent implements OnInit {

  constructor(
    private boardsService: BoardsService
  ) { }

  ngOnInit(): void {
  }

  onAddBoard(){
    this.boardsService.addNewBoard();
  }

}
