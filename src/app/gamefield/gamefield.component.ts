import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  viewChild,
} from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { GameService } from '../game.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gamefield',
  standalone: true,
  imports: [BoardComponent, ReactiveFormsModule],
  templateUrl: './gamefield.component.html',
  styleUrl: './gamefield.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamefieldComponent {
  loseDialog = viewChild<ElementRef>('loseDialog');
  winnerDialog = viewChild<ElementRef>('winnerDialog');
  constructor(public gameService: GameService) {}

  losePopUp() {
    this.loseDialog()?.nativeElement.showModal();
  }

  winnerPopUp() {
    this.winnerDialog()?.nativeElement.showModal();
  }

  onStepBackClick() {
    this.gameService.stepBack();
  }

  onRestartClick() {
    this.gameService.restart();
  }

  onSelectCell(data: { positionX: number; positionY: number }) {
    this.gameService.selectCell(data.positionX, data.positionY);
  }

  createArray() {
    this.gameService.arrayFill();
  }
}
