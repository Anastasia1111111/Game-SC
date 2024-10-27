import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
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
  buttonState = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

  historyMoves: number[][] = [];

  selectCell(positionX: number, positionY: number) {
    this.buttonState[positionX][positionY] = 1;
    this.historyMoves.push([positionX, positionY]);
  }

  isMoveValid(positionX: number, positionY: number): boolean {
    return positionX >= 0 && positionX < 10 && positionY >= 0 && positionY < 10;
  }

  isCellSelectable(positionX: number, positionY: number) {
    let result = false;
    if (this.historyMoves.length !== 0) {
      let last = this.historyMoves[this.historyMoves.length - 1];
      this.knightPositions.forEach((knightPosition) => {
        let possiblePositionX = last[0] + knightPosition[0];
        let possiblePositionY = last[1] + knightPosition[1];
        if (this.isMoveValid(possiblePositionX, possiblePositionY)) {
          if (
            possiblePositionX === positionX &&
            possiblePositionY === positionY &&
            !this.buttonState[possiblePositionX][possiblePositionY]
          ) {
            result = true;
          }
        }
      });
    }
    return result;
  }

  Restart() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.buttonState[i][j] = 0;
      }
    }
    this.historyMoves = [];
  }

  StepBack() {
    if (this.historyMoves.length !== 0) {
      let last = this.historyMoves[this.historyMoves.length - 1];
      this.buttonState[last[0]][last[1]] = 0;
      this.historyMoves.pop();
    }
  }

  checkPossibleMoves(positionX: number, positionY: number) {
    return this.knightPositions.some((knightPosition) => {
      let possiblePositionX = positionX + knightPosition[0];
      let possiblePositionY = positionY + knightPosition[1];
      return (
        this.isMoveValid(possiblePositionX, possiblePositionY) &&
        this.buttonState[possiblePositionX][possiblePositionY] === 0
      );
    });
  }

  constructor() {}
}
