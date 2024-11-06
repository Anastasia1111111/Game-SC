import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  input,
  output,
  viewChild,
} from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { GameService } from '../game.service';
@Component({
  selector: 'app-board',
  standalone: true,
  imports: [CellComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  loseDialog = viewChild<ElementRef>('loseDialog');
  winnerDialog = viewChild<ElementRef>('winnerDialog');
  buttonsX = Array(10).fill(0);
  buttonsY = Array(10).fill(0);
  buttonState = input.required<number[][]>();
  historyMoves = input.required<number[][]>();
  restart = output();
  numberPosition!: number;
  public constructor(
    public gameService: GameService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {}
  selectCell(positionX: number, positionY: number) {
    this.gameService.selectCell(positionX, positionY);
    this.numberPosition = this.historyMoves().length;
    if (this.historyMoves().length === 100) {
      this.winnerDialog()?.nativeElement.showModal();
      return;
    }
    if (!this.gameService.checkPossibleMoves(positionX, positionY)) {
      this.loseDialog()?.nativeElement.showModal();
    }
  }

  onRestartClick() {
    this.restart.emit();
  }
  
  ngDoCheck(){
      this.changeDetectorRef.detectChanges();
    }

    public isCellSelectable(positionX: number, positionY: number){
      this.gameService.isCellSelectable(positionX, positionY);
    }
}
