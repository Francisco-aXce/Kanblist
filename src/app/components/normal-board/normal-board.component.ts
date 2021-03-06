import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { BoardsService } from 'src/app/services/boards.service';
import { Board, Task } from './../../models/board.model';

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

  @Output() dragChange = new EventEmitter<boolean>();

  constructor(
    private boardService: BoardsService
  ) { }

  ngOnInit(): void {

  }

  drag(value: boolean) {
    this.dragChange.emit(value);

    if(value === true) {
      this.boardService.updateBoard(this.board.payloadId!, this.board).then(() => {
        console.log("Board updated!");
      }).catch((error) => {
        console.log(error);
      })
    }
  }

  onAddTask(){
    this.boardService.$addTask.emit(true);
    this.boardService.modifyingBoard = this.board.id;
  }

  onDeleteBoard(){
    this.boardService.deleteBoard(this.board.payloadId!).then(() => {
      console.log("Board deleted!");
      this.boardService.organizeIds();
    }).catch((error) => {
      console.log(error);
    });
  }

  moveTask(drop: CdkDragDrop<Task[]>){
    const { previousContainer, container, previousIndex, currentIndex } = drop;
    const isSameContainer = previousContainer === container;

    if (isSameContainer && previousIndex === currentIndex) return;


    isSameContainer ? this.boardService.reorganizeTask(container.data, previousIndex, currentIndex)
    : this.boardService.transferTask(previousContainer.data, container.data, previousIndex, currentIndex);
  }

}
