import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './components/question';
import { AnswerForQuestionPipe, DisplaySubmitAnswersButtonPipe } from './pipes';

@NgModule({
  declarations: [
    QuestionComponent,
    AnswerForQuestionPipe,
    DisplaySubmitAnswersButtonPipe,
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    QuestionComponent,
    AnswerForQuestionPipe,
    DisplaySubmitAnswersButtonPipe,
  ],
  providers: [],
})
export class AngularCertificationSharedModule {}