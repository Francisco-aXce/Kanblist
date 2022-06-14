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

  }

  ngOnInit(): void {
    this.boardsService.$addTask.subscribe((value) => this.addTaskModal = value);

    //Get the boards from firestore, this may be in a function
    this.boardsService.getAllBoards().subscribe(data => {
      let tmpBoards: Board[] = [];
      data.forEach((element: any) => {
        tmpBoards.push({
          payloadId:element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      tmpBoards = tmpBoards.sort((b1,b2) => {
        if (b1.id < b2.id) {
            return -1;
        }
        if (b1.id > b2.id) {
            return 1;
        }
        return 0;
      });
      this.boards = tmpBoards
      this.boardsService.boards = tmpBoards;
    })
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
