import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularCertificationSharedModule } from '@shared';

import { ResultsComponent } from './results.component';

import { resultsRoutes } from './results.routes';
import { ResultsCounterComponent, ResultsHighlightComponent } from './components';
import { ResultBackgroundByCountPipe } from './pipes';

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