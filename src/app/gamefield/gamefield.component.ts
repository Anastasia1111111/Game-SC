import { Component } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { GameService } from '../game.service';
import { PopUpRestartComponent } from '../pop-up-restart/pop-up-restart.component';
import { PopUpLoseComponent } from '../pop-up-lose/pop-up-lose.component';
import { PopUpWinnerComponent } from '../pop-up-winner/pop-up-winner.component';

@Component({
  selector: 'app-gamefield',
  standalone: true,
  imports: [BoardComponent, PopUpRestartComponent, PopUpLoseComponent, PopUpWinnerComponent],
  templateUrl: './gamefield.component.html',
  styleUrl: './gamefield.component.scss',
})
export class GamefieldComponent {
  constructor(private gameService: GameService) {}

  OnStepBackClick() {
    this.gameService.StepBack();
  }
}
