import { Injectable } from '@angular/core';

import { Board, Priority } from './../models/board.model';

@Injectable({
  providedIn: 'root'
})
export class BoardsService {

  boards: Board[] = [
    {
      id: 'todo',
      name: 'Todo',
      tasks: [
        {
          id: 'clean desk',
          name: 'Clean desk',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros tortor, mollis fermentum enim nec, convallis placerat tellus. Curabitur ultrices risus orci, sed condimentum nisi semper et. Nam egestas elementum mauris. Etiam maximus libero at augue laoreet imperdiet. In pulvinar libero et odio blandit, vel feugiat magna semper. Cras justo elit, condimentum eget hendrerit vestibulum, venenatis non nunc. Sed diam tortor, lacinia ut venenatis bibendum, elementum id dui. Etiam iaculis commodo felis, quis commodo justo dapibus sit amet. Integer id porta diam, in suscipit felis. Integer nec aliquam tellus. Nullam et nunc consequat, posuere mauris in, lobortis dui. Cras in leo ut orci vehicula maximus. Proin non turpis leo. Morbi ac sodales justo.',
          status: 'in mind',
          priority: Priority.medium
        },
        {
          id: 'make bed',
          name: 'Make bed',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros tortor, mollis fermentum enim nec, convallis placerat tellus. Curabitur ultrices risus orci, sed condimentum nisi semper et. Nam egestas elementum mauris. Etiam maximus libero at augue laoreet imperdiet. In pulvinar libero et odio blandit, vel feugiat magna semper. Cras justo elit, condimentum eget hendrerit vestibulum, venenatis non nunc. Sed diam tortor, lacinia ut venenatis bibendum, elementum id dui. Etiam iaculis commodo felis, quis commodo justo dapibus sit amet. Integer id porta diam, in suscipit felis. Integer nec aliquam tellus. Nullam et nunc consequat, posuere mauris in, lobortis dui. Cras in leo ut orci vehicula maximus. Proin non turpis leo. Morbi ac sodales justo.',
          status: 'in mind',
          priority: Priority.low
        }
      ]
    },
    {
      id: 'inprogress',
      name: 'In progress',
      tasks: [
        {
          id: 'gaming',
          name: 'Gaming',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros tortor, mollis fermentum enim nec, convallis placerat tellus. Curabitur ultrices risus orci, sed condimentum nisi semper et. Nam egestas elementum mauris. Etiam maximus libero at augue laoreet imperdiet. In pulvinar libero et odio blandit, vel feugiat magna semper. Cras justo elit, condimentum eget hendrerit vestibulum, venenatis non nunc. Sed diam tortor, lacinia ut venenatis bibendum, elementum id dui. Etiam iaculis commodo felis, quis commodo justo dapibus sit amet. Integer id porta diam, in suscipit felis. Integer nec aliquam tellus. Nullam et nunc consequat, posuere mauris in, lobortis dui. Cras in leo ut orci vehicula maximus. Proin non turpis leo. Morbi ac sodales justo.',
          status: 'in mind',
          priority: Priority.high
        },
        {
          id: 'study',
          name: 'Study',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros tortor, mollis fermentum enim nec, convallis placerat tellus. Curabitur ultrices risus orci, sed condimentum nisi semper et. Nam egestas elementum mauris. Etiam maximus libero at augue laoreet imperdiet. In pulvinar libero et odio blandit, vel feugiat magna semper. Cras justo elit, condimentum eget hendrerit vestibulum, venenatis non nunc. Sed diam tortor, lacinia ut venenatis bibendum, elementum id dui. Etiam iaculis commodo felis, quis commodo justo dapibus sit amet. Integer id porta diam, in suscipit felis. Integer nec aliquam tellus. Nullam et nunc consequat, posuere mauris in, lobortis dui. Cras in leo ut orci vehicula maximus. Proin non turpis leo. Morbi ac sodales justo.',
          status: 'in mind',
          priority: Priority.medium
        }
      ]
    }
  ];

  defaultBoard: Board = {
    id: "new board",
    name: "New board",
    tasks: []
  }

  constructor() { }

  getAllBoards(){
    return this.boards;
  }

  addNewBoard(){
    this.boards.push({...this.defaultBoard});
    console.log(this.boards);

  }

}
