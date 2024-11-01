import {
  Component,
  EventEmitter,
  HostBinding,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
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
  numberPosition!: number;
  @Output() selectCell = new EventEmitter();
  @ViewChild('dialog', { static: true }) public test: any;
  @HostBinding('class.selected') get selected() {
    return this.gameService.buttonState[this.positionX][this.positionY] === 1;
  }
  @HostBinding('class.possible') get possible() {
    return this.gameService.isCellSelectable(this.positionX, this.positionY);
  }
  @HostBinding('class.disabled') get disabled() {
    return (
      (!this.gameService.isCellSelectable(this.positionX, this.positionY) &&
        this.gameService.historyMoves.length !== 0) ||
      this.gameService.buttonState[this.positionX][this.positionY] === 1
    );
  }
  @HostBinding('class.last') get last() {
    return this.gameService.checkLastCell(this.positionX, this.positionY);
  }

  constructor(private gameService: GameService) {}
  onButtonClick() {
    this.selectCell.emit();
    this.numberPosition = this.gameService.historyMoves.length;
  }
}
