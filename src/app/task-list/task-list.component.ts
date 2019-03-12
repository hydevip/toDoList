import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  task: Task;
  tasks: Task[];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasks();
    this.taskService.getTasksList();
  }

  getTasks() {
    return this.taskService
      .updateTasksList()
      .subscribe((data: Task[]) => (this.tasks = data));
  }


}
