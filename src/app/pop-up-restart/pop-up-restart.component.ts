import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-pop-up-restart',
  standalone: true,
  imports: [],
  templateUrl: './pop-up-restart.component.html',
  styleUrl: './pop-up-restart.component.scss',
})
export class PopUpRestartComponent {
  constructor(private gameService: GameService) {}
  OnRestartClick() {
    this.gameService.Restart();
  }
}
