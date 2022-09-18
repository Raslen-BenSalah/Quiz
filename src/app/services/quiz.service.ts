import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Quiz } from '../models/quiz';


@Injectable({
  providedIn: 'root'
})
export class QuizService {


  url = "http://localhost:8080/api/quiz"

  constructor(private http : HttpClient) { }

  list():Observable<Quiz[]>{

    return this.http.get<Quiz[]>(this.url+"/list")

  }
}
