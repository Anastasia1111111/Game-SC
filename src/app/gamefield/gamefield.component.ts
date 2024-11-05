import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
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
  board = viewChild(BoardComponent);
  constructor(private gameService: GameService) {}
  onStepBackClick() {
    this.gameService.stepBack();
    this.board()?.changeDetectorRef.detectChanges();
  }
  onRestartClick() {
    this.gameService.restart();
    this.board()?.changeDetectorRef.detectChanges();
  }
}
