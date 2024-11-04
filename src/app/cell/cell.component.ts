import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
  output,
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
  positionX = input.required<number>();
  positionY = input.required<number>();
  numberPosition!: number;
  selectCell = output();
  @HostBinding('class.selected') get selected() {
    return (
      this.gameService.buttonState()[this.positionX()][this.positionY()] === 1
    );
  }
  @HostBinding('class.possible') get possible() {
    return this.gameService.isCellSelectable(
      this.positionX(),
      this.positionY(),
    );
  }
  @HostBinding('class.disabled') get disabled() {
    return (
      (!this.gameService.isCellSelectable(this.positionX(), this.positionY()) &&
        this.gameService.historyMoves.length !== 0) ||
      this.gameService.buttonState()[this.positionX()][this.positionY()] === 1
    );
  }
  @HostBinding('class.last') get last() {
    return this.gameService.checkLastCell(this.positionX(), this.positionY());
  }

  constructor(private gameService: GameService) {}

  onButtonClick() {
    this.selectCell.emit();
    this.numberPosition = this.gameService.historyMoves.length;
  }
}
