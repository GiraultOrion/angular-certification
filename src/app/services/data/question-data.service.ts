import { Injectable } from '@angular/core';
import { Answer, Question } from '@models';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { QuestionApiService } from '../api';
import { mapResultToQuestion, mapToVoid, shuffle } from '@utils';

@Injectable({
  providedIn: 'root',
})
export class QuestionDataService {
  private questionsObs: BehaviorSubject<Array<Question>> = new BehaviorSubject<
    Array<Question>
  >([]);
  public questions$: Observable<Array<Question>> =
    this.questionsObs.asObservable();

  private answersObs: BehaviorSubject<Array<Answer>> = new BehaviorSubject<
    Array<Answer>
  >([]);
  public answers$: Observable<Array<Answer>> = this.answersObs.asObservable();

  constructor(private questionApi: QuestionApiService) {}

  public fetchQuestions(
    triviaId: number,
    difficulty: string
  ): Observable<void> {
    return this.questionApi
      .getQuestionsByTriviaAndDifficulty(triviaId, difficulty)
      .pipe(
        tap((response) =>
          this.questionsObs.next(shuffle(mapResultToQuestion(response)))
        ),
        mapToVoid()
      );
  }

  public addOrUpdateAnswer(id: number, answer: string): void {
    const list: Array<Answer> = [...this.answersObs.value];
    const answerIndex: number = list.findIndex(
      (element) => element.questionId === id
    );
    if (answerIndex === -1) {
      list.push({ questionId: id, answer: answer });
    } else if (list[answerIndex].answer !== answer) {
      list[answerIndex].answer = answer;
    }
    this.answersObs.next(list);
  }

  public getCorrectAnswersCount(): number {
    let result: number = 0;
    this.questionsObs.value.forEach((question) => {
      const answer: Answer | undefined = this.answersObs.value.find(
        (answer) => answer.questionId === question.id
      );
      if (answer && answer.answer === question.correctAnswer) {
        result++;
      }
    });
    return result;
  }

  public resetAnswers(): void {
    this.answersObs.next([]);
  }

  public resetQuestion(): void {
    this.questionsObs.next([]);
  }
}