import { Component } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { GameService } from '../game.service';
import { PopUpRestartComponent } from '../pop-up-restart/pop-up-restart.component';

@Component({
  selector: 'app-gamefield',
  standalone: true,
  imports: [BoardComponent, PopUpRestartComponent],
  templateUrl: './gamefield.component.html',
  styleUrl: './gamefield.component.scss',
})
export class GamefieldComponent {
  constructor(private gameService: GameService) {}

  OnStepBackClick() {
    this.gameService.StepBack();
  }
}
