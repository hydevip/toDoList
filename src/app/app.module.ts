import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TaskListComponent } from './task-list/task-list.component';
import { CreateTaskComponent } from './task-list/create-task/create-task.component';
import { EditTaskComponent } from './task-list/edit-task/edit-task.component';

import {
  MatCardModule,
  MatExpansionModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatDividerModule,
  MatRadioModule,
  MatDialogModule
} from '@angular/material';



@NgModule({
  declarations: [AppComponent, TaskListComponent, CreateTaskComponent, EditTaskComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [EditTaskComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
