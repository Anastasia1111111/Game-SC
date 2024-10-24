import { Component, Input, HostBinding } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss',
})
export class CellComponent {
  @Input() positionX!: number;
  @Input() positionY!: number;
  possiblePositionX!: number[];
  possiblePositionY!: number[];
  @HostBinding('class.selected') get selected() {
    return this.gameService.buttonState[this.positionX][this.positionY] === 1;
  }

  constructor(private gameService: GameService) {}
  OnButtonClick() {
    this.gameService.buttonState[this.positionX][this.positionY] = 1;
    this.possiblePositionY = this.gameService.NextStepY(this.positionX);
    this.possiblePositionX =  this.gameService.NextStepX(this.positionY);
    console.log(this.possiblePositionX, this.possiblePositionY);
  }
}
