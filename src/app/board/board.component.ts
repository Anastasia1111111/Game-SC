import { Component } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CellComponent, NgClass],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  buttonsX = Array(10).fill(0);
  buttonsY = Array(10).fill(0);
}
