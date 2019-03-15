import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { Task } from './interfaces';
import { Observable, of, Subject, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  api_url = 'http://localhost:8080';
  tasksUrl = '/api/tasks';

  private subjectGetTasks = new BehaviorSubject<any>(
    this.http
      .get<Task[]>(this.tasksUrl)
      .pipe(catchError(this.handleError('getTask', [])))
  );

  constructor(private http: HttpClient) {}

  getTasksList(): Observable<Task[]> {
    return this.subjectGetTasks.asObservable();
  }

  sendTasksList() {
    this.subjectGetTasks.next(
      this.http
        .get<Task[]>(this.tasksUrl)
        .pipe(catchError(this.handleError('getTask', [])))
    );
  }

  addTask(task: Task): Observable<Task> {
    return this.http
      .post<Task>(this.tasksUrl, task, httpOptions)
      .pipe(catchError(this.handleError<Task>('postTask')));
  }

  editTask(task: Task): Observable<any> {
    const newTaskUrl = this.tasksUrl + '/' + task._id;
    console.log('put task final link');
    console.log(newTaskUrl);
    return this.http
      .put(newTaskUrl, task, httpOptions)
      .pipe(catchError(this.handleError<Task>('putTask')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
