import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-pop-up-winner',
  standalone: true,
  imports: [],
  templateUrl: './pop-up-winner.component.html',
  styleUrl: './pop-up-winner.component.scss'
})
export class PopUpWinnerComponent {
  constructor(private gameService: GameService) {}
  OnRestartClick() {
    this.gameService.Restart();
  }
}
