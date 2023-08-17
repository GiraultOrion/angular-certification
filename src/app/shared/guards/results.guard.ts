import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { QuestionDataService } from '@services';
import { AngularCertificationRoutes } from '@utils';
import { Observable, combineLatest, map, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ResultsGuard {
    constructor(
        private router: Router,
        private questionDataService: QuestionDataService
    ) {}
    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        return combineLatest([this.questionDataService.questions$, this.questionDataService.answers$]).pipe(
            map(([questions, answers]) => {
                return questions.length > 0 && answers.length > 0
            }),
            tap((result) => {
                if (!result) {
                    this.router.navigate([AngularCertificationRoutes.QUIZZ_ROUTE]);
                }
            })
        );
    }
}
