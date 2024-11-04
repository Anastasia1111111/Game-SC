import { Injectable, signal, WritableSignal } from '@angular/core';

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
  // buttonState = [
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  //   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  // ];
  buttonState: WritableSignal<number[][]> = signal([
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
  ]);
  historyMoves: number[][] = [];

  selectCell(positionX: number, positionY: number) {
    this.buttonState.update((btnState) => {
      const newBtnState = [...btnState];
      newBtnState[positionX][positionY] = 1;
      return newBtnState;
    });
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
            !this.buttonState()[possiblePositionX][possiblePositionY]
          ) {
            result = true;
          }
        }
      });
    }
    return result;
  }

  restart() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        this.buttonState.update((btnState) => {
          const newBtnState = [...btnState];
          newBtnState[i][j] = 0;
          return newBtnState;
        });
      }
    }
    this.historyMoves = [];
  }

  stepBack() {
    if (this.historyMoves.length !== 0) {
      let last = this.historyMoves[this.historyMoves.length - 1];
      this.buttonState.update((btnState) => {
        const newBtnState = [...btnState];
        newBtnState[last[0]][last[1]] = 0;
        return newBtnState;
      });
      this.historyMoves.pop();
    }
  }

  checkPossibleMoves(positionX: number, positionY: number) {
    return this.knightPositions.some((knightPosition) => {
      let possiblePositionX = positionX + knightPosition[0];
      let possiblePositionY = positionY + knightPosition[1];
      return (
        this.isMoveValid(possiblePositionX, possiblePositionY) &&
        this.buttonState()[possiblePositionX][possiblePositionY] === 0
      );
    });
  }

  checkLastCell(positionX: number, positionY: number) {
    let last = this.historyMoves[this.historyMoves.length - 1];
    return (
      this.buttonState()[positionX][positionY] === 1 &&
      last[0] === positionX &&
      last[1] === positionY
    );
  }
}
