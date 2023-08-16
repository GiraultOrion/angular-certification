import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Trivia, TriviaResponse } from '@models';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TriviaApiService {
    private baseUrl: string = environment.targetApiEnv;

    constructor(private httpClient: HttpClient) {}

    public getTrivia(): Observable<TriviaResponse> {
        return this.httpClient.get<TriviaResponse>(
          this.baseUrl + '/api_category.php'
        );
    }
}