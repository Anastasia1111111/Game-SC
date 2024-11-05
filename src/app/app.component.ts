import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamefieldComponent } from './gamefield/gamefield.component';
import { BoardComponent } from './board/board.component';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GamefieldComponent, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(private gameService: GameService){}
  title = 'Game';
}
