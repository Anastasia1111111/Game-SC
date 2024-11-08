import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  input,
  output,
  viewChild,
} from '@angular/core';
import { CellComponent } from '../cell/cell.component';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CellComponent],
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
  loseDialog = viewChild<ElementRef>('loseDialog');
  winnerDialog = viewChild<ElementRef>('winnerDialog');
  buttonsX = Array(10).fill(0);
  buttonsY = Array(10).fill(0);

  public constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public selectCell(positionX: number, positionY: number) {
    this.selectSellEmitter.emit({ positionX, positionY });
    if (this.historyMoves().length === 100) {
      this.winnerDialog()?.nativeElement.showModal();
      return;
    }
    if (!this.checkPossibleMoves(positionX, positionY)) {
      this.loseDialog()?.nativeElement.showModal();
    }
  }

  checkPossibleMoves(positionX: number, positionY: number) {
    return this.knightPositions().some((knightPosition) => {
      let possiblePositionX = positionX + knightPosition[0];
      let possiblePositionY = positionY + knightPosition[1];
      return (
        this.isMoveValid(possiblePositionX, possiblePositionY) &&
        this.buttonState()[possiblePositionX][possiblePositionY] === 0
      );
    });
  }

  isMoveValid(positionX: number, positionY: number): boolean {
    return positionX >= 0 && positionX < 10 && positionY >= 0 && positionY < 10;
  }

  isCellSelectable(positionX: number, positionY: number) {
    let result = false;
    if (this.historyMoves().length !== 0) {
      let last = this.historyMoves()[this.historyMoves().length - 1];
      this.knightPositions().forEach((knightPosition) => {
        let possiblePositionX = last[0] + knightPosition[0];
        let possiblePositionY = last[1] + knightPosition[1];
        if (this.isMoveValid(possiblePositionX, possiblePositionY)) {
          if (
            possiblePositionX === positionX &&
            possiblePositionY === positionY &&
            !this.buttonState()[possiblePositionX][possiblePositionY]
          ) {
            result = true;
          }
        }
      });
    }
    return result;
  }

  isDisabled(positionX: number, positionY: number) {
    return (
      (!this.isCellSelectable(positionX, positionY) &&
        this.historyMoves().length !== 0) ||
      this.buttonState()[positionX][positionY] === 1
    );
  }

  checkLastCell(positionX: number, positionY: number) {
    let last = this.historyMoves()[this.historyMoves().length - 1];
    return (
      this.buttonState()[positionX][positionY] === 1 &&
      last[0] === positionX &&
      last[1] === positionY
    );
  }

  onRestartClick() {
    this.restart.emit();
  }

  ngDoCheck() {
    this.changeDetectorRef.detectChanges();
  }
}
