import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Answer, CodeLabel, Question, Trivia } from '@models';
import { QuestionDataService, TriviaDataService } from '@services';
import { DEFAULT_DIFFICULTIES } from '@utils';

import { Observable } from 'rxjs';

@Component({
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizzComponent implements OnInit {


  constructor(
    private questionDataService: QuestionDataService,
  ) {}

  ngOnInit(): void {
    
  }

  public addOrUpdateAnswer(id: number, answer: string): void {
    this.questionDataService.addOrUpdateAnswer(id, answer);
  }
}
