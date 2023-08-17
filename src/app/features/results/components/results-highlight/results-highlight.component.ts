import { Component, OnInit } from '@angular/core';
import { Answer, Question } from '@models';
import { QuestionDataService } from '@services';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-certification-results-highlight',
  templateUrl: './results-highlight.component.html',
})
export class ResultsHighlightComponent implements OnInit {
  public readonly questions$: Observable<Array<Question>> =
    this.questionDataService.questions$;
  public readonly answers$: Observable<Array<Answer>> =
    this.questionDataService.answers$;

  constructor(
    private questionDataService: QuestionDataService
  ) {}

  ngOnInit(): void {}
}
