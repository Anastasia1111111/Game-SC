import { Component, ElementRef, ViewChild } from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gamefield',
  standalone: true,
  imports: [BoardComponent],
  templateUrl: './gamefield.component.html',
  styleUrl: './gamefield.component.scss',
})
export class GamefieldComponent {
  @ViewChild('dialog', { static: true }) public dialog?: ElementRef;

  constructor(private gameService: GameService) {}

  OnStepBackClick() {
    this.gameService.StepBack();
  }
  OnRestartClick() {
    this.gameService.Restart();
  }
}
