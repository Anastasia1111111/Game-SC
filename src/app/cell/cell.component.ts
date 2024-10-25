import {
  Component,
  Input,
  HostBinding,
  ChangeDetectionStrategy,
} from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellComponent {
  @Input() positionX!: number;
  @Input() positionY!: number;
  @HostBinding('class.selected') get selected() {
    console.log([this.positionX][this.positionY], this.gameService.buttonState[this.positionX][this.positionY])
    return this.gameService.buttonState[this.positionX][this.positionY] === 1;
  }
  @HostBinding('class.possible') get possible() {
    return this.gameService.isPossible(this.positionX, this.positionY);
  }
  @HostBinding('class.disabled') get disabled() {
    return (
      (!this.gameService.isPossible(this.positionX, this.positionY) &&
        this.gameService.historyMoves.length !== 0) ||
      this.gameService.buttonState[this.positionX][this.positionY] === 1
    );
  }

  // @HostBinding('class.restarted') get restarted(){
  //   console.log(this.gameService.checkRestart());
  //   return this.gameService;
  // } 

  constructor(private gameService: GameService) {}
  OnButtonClick() {
    this.gameService.selectCell(this.positionX, this.positionY);
  }
}
