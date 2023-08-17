import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Answer } from '@models';
import { QuestionDataService } from '@services';
import { AngularCertificationRoutes } from '@utils';
import { Observable, combineLatest, map } from 'rxjs';

@Component({
  selector: 'angular-certification-results-counter',
  templateUrl: './results-counter.component.html',
  styleUrls: ["./results-counter.component.scss"]
})
export class ResultsCounterComponent implements OnInit {
    public resultCount: number = this.questionDataService.getCorrectAnswersCount();

  constructor(
    private router: Router,
    private questionDataService: QuestionDataService
  ) {}

  ngOnInit(): void {}

  public goToQuizz(): void {
    this.router.navigate([AngularCertificationRoutes.QUIZZ_ROUTE]);
  }
}
