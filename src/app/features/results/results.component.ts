import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestionDataService } from '@services';

@Component({
    templateUrl: './results.component.html',
    styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit, OnDestroy {
    constructor(private questionDataService: QuestionDataService) { }

    ngOnInit(): void { }

    public ngOnDestroy(): void {
        this.questionDataService.resetQuestion();
        this.questionDataService.resetAnswers();
    }
}
