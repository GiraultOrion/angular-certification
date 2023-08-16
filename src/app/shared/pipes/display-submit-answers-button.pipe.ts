import { Pipe, PipeTransform } from '@angular/core';
import { Answer, Question } from '@models';

@Pipe({ name: 'displaySubmitAnswersButtonPipe' })
export class DisplaySubmitAnswersButtonPipe implements PipeTransform {
  transform(answers: Array<Answer> | null, questions: Array<Question> | null): boolean {
    return (questions !== null && questions.length > 0) ? questions?.length === answers?.length: false;
  }
}