import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CodeLabel, Trivia } from '@models';
import { QuestionDataService, TriviaDataService } from '@services';
import { DEFAULT_DIFFICULTIES } from '@utils';
import { Observable } from 'rxjs';

interface QuizzForm {
  trivia: FormControl<number | null>;
  difficulty: FormControl<string | null>;
}

@Component({
  selector: 'angular-certification-quizz-configuration',
  templateUrl: './quizz-configuration.html',
})
export class QuizzConfigurationComponent implements OnInit {
  public readonly trivias$: Observable<Array<Trivia>> =
    this.triviasDataService.trivias$;

  public readonly difficulties: Array<CodeLabel> = DEFAULT_DIFFICULTIES;
  public formGroup!: FormGroup<QuizzForm>;

  constructor(
    private fb: FormBuilder,
    private triviasDataService: TriviaDataService,
    private questionDataService: QuestionDataService
  ) {
    this.formGroup = this.fb.group({
      trivia: [null as number | null, [Validators.required]],
      difficulty: [null as string | null, [Validators.required]],
    });
  }

  public ngOnInit(): void {
    this.triviasDataService.fetchTrivias().subscribe();
  }

  public createQuizz(): void {
    this.questionDataService
      .fetchQuestions(
        this.formGroup.value.trivia ?? 0,
        this.formGroup.value.difficulty ?? ''
      )
      .subscribe();
  }
}
