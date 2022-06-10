import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { EventEmitter, Injectable } from '@angular/core';

import { Board, Priority, Task } from './../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  modifyingBoard:number = -1;
  modifyingTask:number = -1;
  $addTask = new EventEmitter<boolean>();

  boards: Board[] = [
    {
      id: 6,
      name: 'Todo',
      tasks: [
        {
          id: 0,
          name: 'Clean desk',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros tortor, mollis fermentum enim nec, convallis placerat tellus. Curabitur ultrices risus orci, sed condimentum nisi semper et. Nam egestas elementum mauris. Etiam maximus libero at augue laoreet imperdiet. In pulvinar libero et odio blandit, vel feugiat magna semper. Cras justo elit, condimentum eget hendrerit vestibulum, venenatis non nunc. Sed diam tortor, lacinia ut venenatis bibendum, elementum id dui. Etiam iaculis commodo felis, quis commodo justo dapibus sit amet. Integer id porta diam, in suscipit felis. Integer nec aliquam tellus. Nullam et nunc consequat, posuere mauris in, lobortis dui. Cras in leo ut orci vehicula maximus. Proin non turpis leo. Morbi ac sodales justo.',
          status: 'in mind',
          priority: Priority.medium
        },
        {
          id: 1,
          name: 'Make bed',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros tortor, mollis fermentum enim nec, convallis placerat tellus. Curabitur ultrices risus orci, sed condimentum nisi semper et. Nam egestas elementum mauris. Etiam maximus libero at augue laoreet imperdiet. In pulvinar libero et odio blandit, vel feugiat magna semper. Cras justo elit, condimentum eget hendrerit vestibulum, venenatis non nunc. Sed diam tortor, lacinia ut venenatis bibendum, elementum id dui. Etiam iaculis commodo felis, quis commodo justo dapibus sit amet. Integer id porta diam, in suscipit felis. Integer nec aliquam tellus. Nullam et nunc consequat, posuere mauris in, lobortis dui. Cras in leo ut orci vehicula maximus. Proin non turpis leo. Morbi ac sodales justo.',
          status: 'in mind',
          priority: Priority.low
        }
      ]
    },
    {
      id: 0,
      name: 'In progress',
      tasks: [
        {
          id: 0,
          name: 'Gaming',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros tortor, mollis fermentum enim nec, convallis placerat tellus. Curabitur ultrices risus orci, sed condimentum nisi semper et. Nam egestas elementum mauris. Etiam maximus libero at augue laoreet imperdiet. In pulvinar libero et odio blandit, vel feugiat magna semper. Cras justo elit, condimentum eget hendrerit vestibulum, venenatis non nunc. Sed diam tortor, lacinia ut venenatis bibendum, elementum id dui. Etiam iaculis commodo felis, quis commodo justo dapibus sit amet. Integer id porta diam, in suscipit felis. Integer nec aliquam tellus. Nullam et nunc consequat, posuere mauris in, lobortis dui. Cras in leo ut orci vehicula maximus. Proin non turpis leo. Morbi ac sodales justo.',
          status: 'in mind',
          priority: Priority.high
        },
        {
          id: 1,
          name: 'Study',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros tortor, mollis fermentum enim nec, convallis placerat tellus. Curabitur ultrices risus orci, sed condimentum nisi semper et. Nam egestas elementum mauris. Etiam maximus libero at augue laoreet imperdiet. In pulvinar libero et odio blandit, vel feugiat magna semper. Cras justo elit, condimentum eget hendrerit vestibulum, venenatis non nunc. Sed diam tortor, lacinia ut venenatis bibendum, elementum id dui. Etiam iaculis commodo felis, quis commodo justo dapibus sit amet. Integer id porta diam, in suscipit felis. Integer nec aliquam tellus. Nullam et nunc consequat, posuere mauris in, lobortis dui. Cras in leo ut orci vehicula maximus. Proin non turpis leo. Morbi ac sodales justo.',
          status: 'in mind',
          priority: Priority.medium
        }
      ]
    }
  ];

  constructor() {
    this.organizeIds();
  }

  getAllBoards(){
    return this.boards;
  }

  //Add function that organize the boards and tasks ids. The idea is to have an id that is equal to the board index
  organizeIds(){
    for (let i=0; i<this.boards.length; i++){
      this.boards[i].id = i;
      for (let t=0; t<this.boards[i].tasks.length; t++){
        this.boards[i].tasks[t].id = t;
      }
    }
  }

  addNewBoard(){
    this.boards.push({
      id: 0,
      name: "New board",
      tasks: []});
    this.organizeIds();

  }

  addTask(boardIndex: number, task: Task){
    this.boards[boardIndex].tasks.unshift(task)
    this.organizeIds();
  }

  deleteBoard(index: number){
    this.boards.splice(index, 1);
    this.organizeIds();
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
