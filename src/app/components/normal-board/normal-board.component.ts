import { Component, OnInit, Input } from '@angular/core';

import { BoardsService } from 'src/app/services/boards.service';
import { Board } from './../../models/board.model';

@Component({
  selector: 'app-normal-board',
  templateUrl: './normal-board.component.html',
  styleUrls: ['./normal-board.component.scss']
})
export class NormalBoardComponent implements OnInit {

  @Input() board: Board = {
    id:0,
    name:'',
    tasks: []
  }


  constructor(
    private boardService: BoardsService
  ) { }

  ngOnInit(): void {

  }

  onAddTask(){
    this.boardService.$addTask.emit(true);
    this.boardService.modifyingBoard = this.board.id;
    console.log(this.boardService.modifyingBoard);

  }

  onDeleteBoard(){
    this.boardService.deleteBoard(this.board.id);
    console.log(this.board.id);

  }

}
