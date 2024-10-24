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

  isValidMove(positionX: number, positionY: number): boolean {
    return positionX >= 0 && positionX < 10 && positionY >= 0 && positionY < 10;
  }

  isPossible(positionX: number, positionY: number) {
    let result = false;
    if (this.historyMoves.length !== 0) {
      let last = this.historyMoves[this.historyMoves.length - 1];
      this.knightPositions.forEach((knightPosition) => {
        let possiblePositionX = last[0] + knightPosition[0];
        let possiblePositionY = last[1] + knightPosition[1];
        if (this.isValidMove(possiblePositionX, possiblePositionY)) {
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

  constructor() {}
}
