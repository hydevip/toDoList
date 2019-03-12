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

  sendTasksList() {
    this.subjectGetTasks.next(
      this.http
        .get<Task[]>(this.tasksUrl)
        .pipe(catchError(this.handleError('getTask', [])))
    );
  }

  getTasksList(): Observable<any> {
    return this.subjectGetTasks.asObservable();
  }

  // getTasks(): Observable<Task[]> {
  //   return this.http
  //     .get<Task[]>(this.tasksUrl)
  //     .pipe(catchError(this.handleError('getTask', [])));
  // }

  addTask(task: Task): Observable<Task> {
    console.log(task);

    return this.http
      .post<Task>(this.tasksUrl, task, httpOptions)
      .pipe(catchError(this.handleError<Task>('postTask')));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
