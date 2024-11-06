import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  SimpleChanges,
  viewChild,
  ViewChild,
} from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gamefield',
  standalone: true,
  imports: [BoardComponent],
  templateUrl: './gamefield.component.html',
  styleUrl: './gamefield.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamefieldComponent {
  constructor(public gameService: GameService) {}
  onStepBackClick() {
    this.gameService.stepBack();
  }
  onRestartClick() {
    this.gameService.restart();
  }
}
