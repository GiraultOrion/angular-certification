import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer, Question } from '@models';
import { QuestionDataService } from '@services';
import { RESULTS_ROUTE } from '@utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-certification-quizz-display',
  templateUrl: './quizz-display.component.html',
  styleUrls: ['./quizz-display.component.scss'],
})
export class QuizzDisplayComponent implements OnInit {
  public readonly questions$: Observable<Array<Question>> =
    this.questionDataService.questions$;
  public readonly answers$: Observable<Array<Answer>> =
    this.questionDataService.answers$;

  constructor(private router: Router, private questionDataService: QuestionDataService) {}

  ngOnInit(): void {}

  public addOrUpdateAnswer(id: number, answer: string): void {
    this.questionDataService.addOrUpdateAnswer(id, answer);
  }

  public submitAnswers(): void {
    this.router.navigate([RESULTS_ROUTE]);
  }
}
