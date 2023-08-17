import { Pipe, PipeTransform } from '@angular/core';
import { Answer, Question } from '@models';
import { HighlightCssClass } from '@utils';

@Pipe({ name: 'classForAnswerPipe' })
export class ClassForAnswerPipe implements PipeTransform {
  transform(selectedAnswer: string | undefined, question: Question, answer: string, highlightCorrect: boolean): string {
    if (selectedAnswer) {
        if (highlightCorrect && answer === question.correctAnswer) {
          return HighlightCssClass.CORRECT_ANSWER;
        } else if (
          highlightCorrect &&
          answer !== question.correctAnswer &&
          answer === selectedAnswer
        ) {
          return HighlightCssClass.WRONG_ANSWER;
        } else if (answer === selectedAnswer) {
          return HighlightCssClass.CORRECT_ANSWER;
        }
    }
    return "";
  }
}
