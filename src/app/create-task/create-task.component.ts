import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../interfaces';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  test: string;
  enteredTitle: string;

  constructor(private taskService: TaskService) {}

  ngOnInit() {}

  onAddTask(form: NgForm) {
    console.log(form.value);

    this.addTask(form.value);
    form.reset();
    return console.log('task added');
  }

  addTask(task: Task) {
    return this.taskService.addTask(task).subscribe(() => console.log(task));
  }
}
