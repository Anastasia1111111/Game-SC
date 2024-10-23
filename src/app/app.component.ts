import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GamefieldComponent } from './gamefield/gamefield.component';
import { BoardComponent } from "./board/board.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GamefieldComponent, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Game';
}
