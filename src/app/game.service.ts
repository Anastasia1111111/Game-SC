import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {

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

  NextStepY(positionY: number){
    let arrayY: number[] = [];
    positionY += 1;
    arrayY.push(positionY);
    arrayY.push(positionY);
    positionY +=1;
    arrayY.push(positionY);
    positionY -= 3;
    arrayY.push(positionY);
    positionY -=1;
    arrayY.push(positionY);
    return arrayY;
  }
  NextStepX(positionX: number){
    let arrayX: number[] = [];
    positionX += 2;
    arrayX.push(positionX);
    positionX -=4;
    arrayX.push(positionX);
    positionX -= 3;
    arrayX.push(positionX);
    positionX -=1;
    arrayX.push(positionX);
    return arrayX;
  }
  constructor() {}
}
