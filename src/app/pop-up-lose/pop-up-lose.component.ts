import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-pop-up-lose',
  standalone: true,
  imports: [],
  templateUrl: './pop-up-lose.component.html',
  styleUrl: './pop-up-lose.component.scss'
})
export class PopUpLoseComponent {
  constructor(private gameService: GameService) {}
  OnRestartClick() {
    this.gameService.Restart();
  }
}
