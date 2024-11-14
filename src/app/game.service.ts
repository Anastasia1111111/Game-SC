import { Injectable, signal, WritableSignal } from '@angular/core';

enum states{
  selectable,
  selected,
  disabled,
  last
  }

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

  buttonState: states[][] = [
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
    this.checkLastCell(positionX,positionY);
    this.buttonState[positionX][positionY] = 3;
    this.historyMoves.push([positionX, positionY]);
    for(let i = 0; i < 10; i++){
      for(let j = 0; j < 10; j++){
        this.isDisabled(i, j);
        this.isCellSelectable(i, j);
      }
    }
    console.log(this.buttonState);
    console.log(this.historyMoves);
  }
  
  isDisabled(positionX: number, positionY: number) {
    if(this.buttonState[positionX][positionY] !== 1 && this.buttonState[positionX][positionY] !== 3){
    this.buttonState[positionX][positionY] = 2;
    }
  }

  checkLastCell(positionX: number, positionY: number) {
    if(this.historyMoves.length !== 0){
      let last = this.historyMoves[this.historyMoves.length - 1];

     this.buttonState[last[0]][last[1]] = 1; 
  
    }
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
            this.buttonState[positionX][positionY] === 2
          ) {
            this.buttonState[positionX][positionY] = 0;
          }
        }
      });
    }
    return result;
  }

  isMoveValid(positionX: number, positionY: number): boolean {
    return positionX >= 0 && positionX < 10 && positionY >= 0 && positionY < 10;
  }

  restart() {
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
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
    }
  }
}
