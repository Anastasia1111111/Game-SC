import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  viewChild,
} from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { NgClass } from '@angular/common';
import { GameService } from '../game.service';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CellComponent, NgClass],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  loseDialog = viewChild<ElementRef>('loseDialog');
  winnerDialog = viewChild<ElementRef>('winnerDialog');

  buttonsX = Array(10).fill(0);
  buttonsY = Array(10).fill(0);

  public constructor(private gameService: GameService) {}

  public selectCell(positionX: number, positionY: number) {
    this.gameService.selectCell(positionX, positionY);
    if (this.gameService.historyMoves.length === 100) {
      this.winnerDialog()?.nativeElement.showModal();
      return;
    }
    if (!this.gameService.checkPossibleMoves(positionX, positionY)) {
      this.loseDialog()?.nativeElement.showModal();
    }
    this.gameService.buttonState;
  }

  onRestartClick() {
    this.gameService.restart();
  }
}
