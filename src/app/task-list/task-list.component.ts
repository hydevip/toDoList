import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  task: Task = { id: 1, title: 'title 1', description: 'Test task 1', priority: 'High' };
  tasks: Task[] = [ { id: 1, title: 'title 1', description: 'Test task 1', priority: 'High' },
  { id: 1, title: 'title 1', description: 'Test task 1', priority: 'High' },
  { id: 2, title: 'title 2', description: 'Test task 2', priority: 'medium'},
  { id: 3, title: 'title 3', description: 'Test task 3', priority: 'Low' },
  { id: 4, title: 'title 4', description: 'Test task 5', priority: 'High' }] ;

  constructor() { }

  ngOnInit() {
  }



}
