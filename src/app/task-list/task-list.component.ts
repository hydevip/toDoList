import { Component, OnInit } from '@angular/core';
import { Task } from '../interfaces';
import { TaskService } from '../task.service';
import { Subscription } from 'rxjs';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditTaskComponent } from './edit-task/edit-task.component';

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
  selectedTask: Task;
  editedTask: Task;

  constructor(private taskService: TaskService, private dialog: MatDialog) {}

  ngOnInit() {

      this.subscription = this.taskService
        .getTasksList()
        .subscribe((data: Task[]) => (this.tasks = data));
        console.log(this.tasks);

  }


  onEditClicked(task: Task): void {
    this.selectedTask = task;
    console.log('selected task from task list');
    console.log(this.selectedTask);
    const dialogRef = this.dialog.open(EditTaskComponent, {
      width: '500px',
      data: {
        _id: this.selectedTask._id,
        title: this.selectedTask.title,
        description: this.selectedTask.description,
        priority: this.selectedTask.priority}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.editedTask = result;
      console.log(this.editedTask);
    });
  }


  onDeleteClicked(task: Task) {
    this.taskService.deleteTask(task).subscribe();
    return this.taskService.sendTasksList();
  }
}


