import { Component, inject } from '@angular/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { GameService } from '../game.service';
import { MatButtonModule } from '@angular/material/button';
import { CellComponent } from '../cell/cell.component';

@Component({
  selector: 'app-pop-up-winner',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './pop-up-winner.component.html',
  styleUrl: './pop-up-winner.component.scss'
})
export class PopUpWinnerComponent {
  readonly dialogRef = inject(MatDialogRef<CellComponent>);
  constructor(private gameService: GameService){}
  OnRestartClick() {
    this.gameService.Restart();
  }
}
