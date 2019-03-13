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
  subscription2: Subscription;
  task: Task;
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {

      this.subscription = this.taskService
        .getTasksList()
        .subscribe((data: Task[]) => (this.tasks = data));
        console.log(this.tasks);

  }
}
