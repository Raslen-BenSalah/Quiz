import { Component, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-list-quiz',
  templateUrl: './list-quiz.component.html',
  styleUrls: ['./list-quiz.component.css']
})
export class ListQuizComponent implements OnInit {

  listQuiz !: Quiz[] ;

  constructor(private quizService : QuizService) { }

  ngOnInit(): void {
    this.quizService.list().subscribe(
      data=> this.listQuiz = data
    )
  }

}
