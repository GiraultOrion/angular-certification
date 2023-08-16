import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ResultsComponent } from './results.component';
import { resultsRoutes } from './results.routes';

@NgModule({
    declarations: [
        ResultsComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild(resultsRoutes)
    ],
    exports: [],
    providers: [],
})
export class ResultsModule {}