import { Component, ChangeDetectionStrategy, HostBinding, inject } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { GameService } from '../game.service';
import { PopUpRestartComponent } from '../pop-up-restart/pop-up-restart.component';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';



@Component({
  selector: 'app-gamefield',
  standalone: true,
  imports: [BoardComponent, PopUpRestartComponent, MatButtonModule],
  templateUrl: './gamefield.component.html',
  styleUrl: './gamefield.component.scss',
})
export class GamefieldComponent {
  constructor(private gameService: GameService) {}

  OnStepBackClick() {
    this.gameService.StepBack();
  }

  readonly dialog = inject(MatDialog);

  openDialogRestart(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PopUpRestartComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  openDialogWinner(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PopUpRestartComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  
  openDialogLose(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(PopUpRestartComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
}
