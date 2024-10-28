import { Component, Input, HostBinding, inject } from '@angular/core';
import { GameService } from '../game.service';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { PopUpWinnerComponent } from '../pop-up-winner/pop-up-winner.component';
import { PopUpLoseComponent } from '../pop-up-lose/pop-up-lose.component';

@Component({
  selector: 'app-cell',
  standalone: true,
  imports: [MatButtonModule, PopUpWinnerComponent, PopUpLoseComponent],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss',
})
export class CellComponent {
  @Input() positionX!: number;
  @Input() positionY!: number;
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

  readonly dialog = inject(MatDialog);

  openDialogRestartWinner(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
  ): void {
    this.dialog.open(PopUpWinnerComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogRestartLose(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
  ): void {
    this.dialog.open(PopUpLoseComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  constructor(private gameService: GameService) {}
  OnButtonClick() {
    this.gameService.selectCell(this.positionX, this.positionY);
    if (this.gameService.historyMoves.length === 100) {
      this.openDialogRestartWinner('0', '0');
    }
    if (!this.gameService.checkPossibleMoves(this.positionX, this.positionY)) {
      this.openDialogRestartLose('0', '0');
    }
  }
}
