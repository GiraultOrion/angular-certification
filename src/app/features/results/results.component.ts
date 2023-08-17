import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { QuestionDataService } from '@services';

@Component({
  templateUrl: './results.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsComponent implements OnInit, OnDestroy {
  constructor(
    private questionDataService: QuestionDataService
  ) {}

  ngOnInit(): void {}

  public ngOnDestroy(): void {
    this.questionDataService.resetQuestion();
    this.questionDataService.resetAnswers();
  }
}
