import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  input,
  output,
} from '@angular/core';
import { GameService } from '../game.service';
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
  
  constructor(private changeDetectorRef: ChangeDetectorRef, public gameServise: GameService) {}

  numberPosition(positionX:number, positionY:number){
    return this.historyMoves().findIndex((elem) => {
      return positionX === elem[0] && positionY === elem[1];
    })
  }

  selectCell(positionX: number, positionY: number) {
    this.selectSellEmitter.emit({ positionX, positionY });
    // if (this.historyMoves().length === 100) {
    //   this.winnerDialog.emit();
    //   return;
    // }
    // if (!this.checkPossibleMoves(positionX, positionY)) {
    //   this.loseDialog.emit();
    // }
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
  
  currentClasses={
    selected: this,
    possible: false,
    disabled: false,
    last:false
  }

  onRestartClick() {
    this.restart.emit();
  }

  ngDoCheck() {
    this.changeDetectorRef.detectChanges();
  }
}