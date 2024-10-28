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
import { GamefieldComponent } from '../gamefield/gamefield.component';

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './pop-up-restart.component.html',
  styleUrl: './pop-up-restart.component.scss'
})
export class PopUpRestartComponent {
  readonly dialogRef = inject(MatDialogRef<GamefieldComponent>);
  constructor(private gameService: GameService){}
  
  OnRestartClick() {
    this.gameService.Restart();
  }
}
