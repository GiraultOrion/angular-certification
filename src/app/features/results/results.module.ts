import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularCertificationSharedModule } from '@shared';

import { ResultsComponent } from './results.component';

import { resultsRoutes } from './results.routes';
import { ResultBackgroundByCountPipe, ResultsCounterComponent, ResultsHighlightComponent } from './components';

@NgModule({
  declarations: [
    ResultsComponent,
    ResultsHighlightComponent,
    ResultsCounterComponent,
    ResultBackgroundByCountPipe,
  ],
  imports: [
    AngularCertificationSharedModule,
    RouterModule.forChild(resultsRoutes),
  ],
})
export class ResultsModule {}