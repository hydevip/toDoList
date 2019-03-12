import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces';
import { TaskService } from '../task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  subscription: Subscription;
  task: Task;
  tasks: Task[];

  constructor(private taskService: TaskService) {
this.subscription = this.taskService.getTasksList().subscribe((data) => (this.tasks = data));
  }

  ngOnInit() {

  }



}
