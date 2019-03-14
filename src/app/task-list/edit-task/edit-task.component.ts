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

  constructor(
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
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }
}
