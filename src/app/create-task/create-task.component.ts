import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

test: string;
enteredTitle: string;

  constructor() { }

  ngOnInit() {
  }
onAddTask(form: NgForm) {
  console.log(form.value.title);
  return console.log('task added');
}
}
