import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer, Question } from '@models';

@Component({
  selector: 'angular-certification-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionComponent implements OnInit {
  @Input() public question!: Question;
  @Input() public selectedAnswer: Answer | null = null;

  @Output() public select: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  public emitAnswer(answer: string): void {
    this.select.emit(answer);
  }
}
