import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
  output,
} from '@angular/core';

@Component({
  selector: 'app-cell',
  standalone: true,
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CellComponent {
  buttonState = input.required<number>();
  historyMoves = input.required<number[][]>();
  numberPosition?: number;
  selectCell = output();

  @HostBinding('class.selected') get selected() {
    return this.buttonState() === 1;
  }

  onButtonClick() {
    this.selectCell.emit();
    this.numberPosition = this.historyMoves().length;
  }
}
