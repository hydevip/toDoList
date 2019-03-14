import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../../task.service';
import { Task } from '../../interfaces';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  test: string;
  enteredTitle: string;
  addedTask: Task = { title: '', description: '', priority: '' };

  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  onAddTask(form: NgForm) {
    console.log(form.value);
this.addedTask.title = form.value.title;
this.addedTask.description = form.value.description;
this.addedTask.priority = form.value.priority;
    this.addTask(this.addedTask);
    form.reset();
    console.log(this.addedTask);
    return console.log('task added');
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe(() => console.log(task));
    return this.taskService.sendTasksList();
  }
}
