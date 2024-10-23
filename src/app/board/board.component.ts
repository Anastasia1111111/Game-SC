import { Component } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import {NgClass} from "@angular/common";
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CellComponent, NgClass],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  buttons = Array(100).fill(0);
  isClicked: boolean = false;

  onButtonClick(button:number){
    this.isClicked = true;
    console.log(button);
  }
}
