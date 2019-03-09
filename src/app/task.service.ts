import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

api_url = 'http://localhost:8080';
tasksUrl = '${this.api_url}/'


  constructor(private http: HttpClient) { }




}
