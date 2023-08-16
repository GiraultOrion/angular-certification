import { NgModule } from '@angular/core';
import { QuizzComponent } from './quizz.component';
import { RouterModule } from '@angular/router';
import { quizzRoutes } from './quizz.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularCertificationSharedModule } from 'src/app/shared/angular-certification-shared.module';
import { QuizzConfigurationComponent } from './quizz-configuration/quizz-configuration';
import { QuizzDisplayComponent } from './quizz-display/quizz-display.component';

@NgModule({
  declarations: [
    QuizzComponent,
    QuizzConfigurationComponent,
    QuizzDisplayComponent,
  ],
  imports: [
    AngularCertificationSharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(quizzRoutes),
  ],
  exports: [],
  providers: [],
})
export class QuizzModule {}