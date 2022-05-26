import { Component, OnInit, Input } from '@angular/core';

import { Board, Task, Priority } from './../../models/board.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task = {
    id: 0,
    name: '',
    description: '',
    status: '',
    priority: Priority.unassigned
  };

  constructor() { }

  ngOnInit(): void {
  }

}
