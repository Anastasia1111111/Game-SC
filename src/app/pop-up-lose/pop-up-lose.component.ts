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
  selector: 'app-pop-up-lose',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
  ],
  templateUrl: './pop-up-lose.component.html',
  styleUrl: './pop-up-lose.component.scss',
})
export class PopUpLoseComponent {
  readonly dialogRef = inject(MatDialogRef<CellComponent>);
  constructor(private gameService: GameService) {}
  OnRestartClick() {
    this.gameService.Restart();
  }
}
