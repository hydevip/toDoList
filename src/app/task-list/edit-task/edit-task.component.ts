import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material';
import { Task } from '../../interfaces';
import { NgForm } from '@angular/forms';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
  form: FormGroup;
  selectedTask: Task;
  updatedTask: Task;


  constructor(private taskService: TaskService,
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) { _id, title, description, priority }: Task
  ) {
    this.selectedTask = { _id, title, description, priority };

    this.form = fb.group({
      title: [title, Validators.required],
      description: [description, Validators.required],
      priority: [priority, Validators.required]
    });
  }

  ngOnInit() {}

  save() {
this.updatedTask._id = this.selectedTask._id;
this.updatedTask.title = this.form.value.title;
this.updatedTask.description = this.form.value.description;
this.updatedTask.priority = this.form.value.priority;

    this.dialogRef.close(this.form.value);
    console.log('updated task:');
    console.log(this.updatedTask);


    this.taskService.addTask(this.updatedTask).subscribe();
    return this.taskService.sendTasksList();
  }

  close() {
    this.dialogRef.close();
  }
}
