import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  input,
  output,
} from '@angular/core';
import { isMoveValid } from '../common';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [NgClass],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  buttonState = input.required<number[][]>();
  historyMoves = input.required<number[][]>();
  knightPositions = input.required<number[][]>();
  restart = output();
  selectSellEmitter = output<{ positionX: number; positionY: number }>();
  winnerDialog = output();
  loseDialog = output();
  buttonsX = Array(10).fill(0);
  buttonsY = Array(10).fill(0);

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  numberPosition(positionX: number, positionY: number) {
    return this.historyMoves().findIndex((elem) => {
      return positionX === elem[0] && positionY === elem[1];
    });
  }

  checkState(positionX: number, positionY: number) {
    let temp = this.buttonState()[positionX][positionY];
    if (this.historyMoves().length === 0) {
      return;
    }
    switch (this.buttonState()[positionX][positionY]) {
      case 0:
        return 'possible';
      case 1:
        return 'selected';
      case 2:
        return 'disabled';
      case 3:
        return 'last';
    }
    return;
  }

  selectCell(positionX: number, positionY: number) {
    this.selectSellEmitter.emit({ positionX, positionY });
    console.log(positionX, positionY);
    console.log(this.buttonState());
    if (this.historyMoves().length === 100) {
      this.winnerDialog.emit();
      return;
    }
    if (!this.checkPossibleMoves(positionX, positionY)) {
      this.loseDialog.emit();
    }
  }

  checkPossibleMoves(positionX: number, positionY: number) {
    return this.knightPositions().some((knightPosition) => {
      let possiblePositionX = positionX + knightPosition[0];
      let possiblePositionY = positionY + knightPosition[1];
      return (
        isMoveValid(possiblePositionX, possiblePositionY) &&
        this.buttonState()[possiblePositionX][possiblePositionY] === 0
      );
    });
  }

  onRestartClick() {
    this.restart.emit();
  }

  ngDoCheck() {
    this.changeDetectorRef.detectChanges();
  }
}
