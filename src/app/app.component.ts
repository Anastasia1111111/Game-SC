import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CellComponent } from './cell/cell.component';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CellComponent, BoardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Game';
}
