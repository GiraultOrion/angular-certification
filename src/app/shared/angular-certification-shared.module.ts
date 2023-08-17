import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerForQuestionPipe, ClassForAnswerPipe, DisplaySubmitAnswersButtonPipe, SafeHtmlPipe } from './pipes';
import { QuestionComponent } from './components';

@NgModule({
  declarations: [
    QuestionComponent,
    AnswerForQuestionPipe,
    DisplaySubmitAnswersButtonPipe,
    ClassForAnswerPipe,
    SafeHtmlPipe,
  ],
  imports: [CommonModule],
  exports: [
    CommonModule,
    QuestionComponent,
    AnswerForQuestionPipe,
    DisplaySubmitAnswersButtonPipe,
    SafeHtmlPipe,
  ],
  providers: [],
})
export class AngularCertificationSharedModule {}