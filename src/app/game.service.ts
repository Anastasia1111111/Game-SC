import { Injectable } from '@angular/core';
import { isMoveValid } from './common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

enum states {
  selectable,
  selected,
  disabled,
  last,
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  buttonState: states[][] = [];
  historyMoves: number[][] = [];

  knightPositions = [
    [2, 1],
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
  ];

  sizeForm = new FormGroup({
    height: new FormControl(10, [
      Validators.required,
      Validators.min(4),
      Validators.max(20),
    ]),
    width: new FormControl(10, [
      Validators.required,
      Validators.min(4),
      Validators.max(20),
    ]),
  });

  arrayFill() {
    for (let i = 0; i < this.sizeForm.value.height!; i++) {
      this.buttonState[i] = [];
      for (let j = 0; j < this.sizeForm.value.width!; j++) {
        this.buttonState[i][j] = 0;
      }
    }
    console.log(this.buttonState);
  }

  calculationPositions(positionX: number, positionY: number) {
    this.buttonState[positionX][positionY] = 3;
    for (let i = 0; i < this.buttonState.length; i++) {
      for (let j = 0; j < this.buttonState[0].length; j++) {
        this.setDisabledState(i, j);
        this.setCellSelectable(i, j);
      }
    }
  }

  selectCell(positionX: number, positionY: number) {
    this.checkLastCell();
    this.historyMoves.push([positionX, positionY]);
    this.calculationPositions(positionX, positionY);
    console.log(positionX);
  }

  setDisabledState(positionX: number, positionY: number) {
    if (
      this.buttonState[positionX][positionY] !== 1 &&
      this.buttonState[positionX][positionY] !== 3
    ) {
      this.buttonState[positionX][positionY] = 2;
    }
  }

  checkLastCell() {
    if (this.historyMoves.length !== 0) {
      let last = this.historyMoves[this.historyMoves.length - 1];
      this.buttonState[last[0]][last[1]] = 1;
    }
  }

  setCellSelectable(positionX: number, positionY: number) {
    if (this.historyMoves.length !== 0) {
      let last = this.historyMoves[this.historyMoves.length - 1];
      this.knightPositions.forEach((knightPosition) => {
        let possiblePositionX = last[0] + knightPosition[0];
        let possiblePositionY = last[1] + knightPosition[1];
        if (
          isMoveValid(
            possiblePositionX,
            possiblePositionY,
            this.sizeForm.value.height!,
            this.sizeForm.value.width!,
          )
        ) {
          if (
            possiblePositionX === positionX &&
            possiblePositionY === positionY &&
            this.buttonState[positionX][positionY] === 2
          ) {
            this.buttonState[positionX][positionY] = 0;
          }
        }
      });
    }
  }

  restart() {
    for (let i = 0; i < this.buttonState.length; i++) {
      for (let j = 0; j < this.buttonState[0].length; j++) {
        this.buttonState[i][j] = 0;
      }
    }
    this.historyMoves = [];
  }

  stepBack() {
    if (this.historyMoves.length !== 0) {
      let last = this.historyMoves[this.historyMoves.length - 1];
      this.buttonState[last[0]][last[1]] = 0;
      this.historyMoves.pop();
      if (this.historyMoves.length !== 0) {
        last = this.historyMoves[this.historyMoves.length - 1];
        this.calculationPositions(last[0], last[1]);
      }
    }
  }
}
