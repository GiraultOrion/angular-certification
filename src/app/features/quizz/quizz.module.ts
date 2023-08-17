import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularCertificationSharedModule } from '@shared';

import { QuizzComponent } from './quizz.component';
import { QuizzConfigurationComponent, QuizzDisplayComponent } from './components';

import { quizzRoutes } from './quizz.routes';

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
  ]
})
export class QuizzModule {}