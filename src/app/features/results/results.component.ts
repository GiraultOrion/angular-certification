import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer, Question } from '@models';
import { QuestionDataService } from '@services';
import { AngularCertificationRoutes } from '@utils';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent implements OnInit, OnDestroy {
  public readonly questions$: Observable<Array<Question>> =
    this.questionDataService.questions$;
  public readonly answers$: Observable<Array<Answer>> =
    this.questionDataService.answers$;

  constructor(
    private router: Router,
    private questionDataService: QuestionDataService
  ) {}

  ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.questionDataService.resetQuestion();
    this.questionDataService.resetAnswers();
  }

  public goToQuizz(): void {
    this.router.navigate([AngularCertificationRoutes.QUIZZ_ROUTE]);
  }
}
