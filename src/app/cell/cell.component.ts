import { Component, Output, Input, HostBinding } from '@angular/core';
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

  @HostBinding('class.valid') get valid() {
    return this.gameService.buttonState[this.positionX][this.positionY] === 1;
  }

  constructor(private gameService: GameService) {}

  OnButtonClick() {
    this.gameService.buttonState[this.positionX][this.positionY] = 1;
    console.log(this.gameService.buttonState);
  }
}
