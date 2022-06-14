import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { EventEmitter, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { Board, Priority, Task } from './../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  modifyingBoard:number = -1;
  modifyingTask:number = -1;
  $addTask = new EventEmitter<boolean>();

  boards: Board[] = [];

  constructor(
    private firestore: AngularFirestore
  ) {
  }

  getAllBoards(): Observable<any>{
    //return this.boards;
    return this.firestore.collection("boards").snapshotChanges();
  }

  //Add function that organize the boards and tasks ids. The idea is to have an id that is equal to the board index
  organizeIds(){
    for (let i=0; i<this.boards.length; i++){
      this.boards[i].id = i;
      for (let t=0; t<this.boards[i].tasks.length; t++){
        this.boards[i].tasks[t].id = t;
      }
      this.updateBoard(this.boards[i].payloadId!, this.boards[i]);
    }
  }

  addNewBoard(): Promise<any> {
    return this.firestore.collection("boards").add({
      id: this.boards.length,
      name: "New board",
      tasks: []
    })
  }

  addTask(boardIndex: number, task: Task){
    this.boards[boardIndex].tasks.unshift(task)
    this.organizeIds();
  }

  deleteBoard(payloadId: string): Promise<any>{
    //this.boards.splice(index, 1);
    return this.firestore.collection("boards").doc(payloadId).delete();
  }

  updateBoard(payloadId: string, data: Board): Promise<any>{
    return this.firestore.collection("boards").doc(payloadId).update(data);
  }

  deleteTask(boardIndex: number, taskIndex: number) {
    this.boards[boardIndex].tasks.splice(taskIndex,1);
    this.organizeIds();
  }

  reorganizeTask(list: Task[], previousIndex: number, currentIndex: number){
    moveItemInArray(list, previousIndex, currentIndex);
    this.organizeIds()
  }

  transferTask(fromList: Task[], toList: Task[], fromIndex: number, toIndex: number){
    transferArrayItem(fromList, toList, fromIndex, toIndex);
    this.organizeIds()
  }

  reorganizeBoard(list: Board[], previousIndex: number, currentIndex: number){
    moveItemInArray(list, previousIndex, currentIndex);
    this.organizeIds()
  }

}
