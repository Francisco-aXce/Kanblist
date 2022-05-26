import { Component, OnInit, Input } from '@angular/core';

import { Board } from './../../models/board.model';

@Component({
  selector: 'app-normal-board',
  templateUrl: './normal-board.component.html',
  styleUrls: ['./normal-board.component.scss']
})
export class NormalBoardComponent implements OnInit {

  @Input() board: Board = {
    id:'',
    name:'',
    tasks: []
  }

  constructor() { }

  ngOnInit(): void {

  }

}
