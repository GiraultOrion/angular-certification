import { Injectable } from '@angular/core';
import { TriviaApiService } from '../api';
import { Trivia } from '@models';

import { BehaviorSubject, Observable, tap } from 'rxjs';
import { mapToVoid } from '@utils';
import { QuestionDataService } from './question-data.service';

@Injectable({
  providedIn: 'root',
})
export class TriviaDataService {
  private triviasObs: BehaviorSubject<Array<Trivia>> = new BehaviorSubject<
    Array<Trivia>
  >([]);
  public trivias$: Observable<Array<Trivia>> = this.triviasObs.asObservable();

  constructor(private triviaApi: TriviaApiService, private questionDataService: QuestionDataService) {}

  public fetchTrivias(): Observable<void> {
    return this.triviaApi.getTrivia().pipe(
      tap(() => this.questionDataService.resetAnswers()),
      tap((trivias) =>
        this.triviasObs.next(trivias.trivia_categories)
      ),
      mapToVoid()
    );
  }
}
