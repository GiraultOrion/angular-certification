import { Pipe, PipeTransform } from '@angular/core';
import { Answer, Question } from '@models';

@Pipe({ name: 'answerForQuestionPipe' })
export class AnswerForQuestionPipe implements PipeTransform {
  transform(values: Array<Answer> | null, question: Question): Answer | null {
    return values !== null ? values.find(value => value.questionId === question.id) ?? null: null;
  }
}