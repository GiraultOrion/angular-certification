import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer, Question } from '@models';
import { QuestionDataService } from '@services';
import { AngularCertificationRoutes } from '@utils';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent implements OnInit, OnDestroy {
  constructor(
    private router: Router,
    private questionDataService: QuestionDataService
  ) {}

  ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.questionDataService.resetQuestion();
    this.questionDataService.resetAnswers();
  }


}
