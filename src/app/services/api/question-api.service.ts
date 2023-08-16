import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResultResponse } from '@models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QuestionApiService {
  private baseUrl: string = environment.targetApiEnv;

  constructor(private httpClient: HttpClient) {}

  public getQuestionsByTriviaAndDifficulty(triviaId: number, difficulty: string): Observable<ResultResponse> {
    return this.httpClient.get<ResultResponse>(`${this.baseUrl}/api.php?amount=5&type=multiple&category=${triviaId}&difficulty=${difficulty}`);
  }
}