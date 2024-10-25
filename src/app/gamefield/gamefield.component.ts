import { Component, ChangeDetectionStrategy, HostBinding} from '@angular/core';
import { BoardComponent } from '../board/board.component';
import { GameService } from '../game.service';

@Component({
  selector: 'app-gamefield',
  standalone: true,
  imports: [BoardComponent],
  templateUrl: './gamefield.component.html',
  styleUrl: './gamefield.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GamefieldComponent {
  constructor(private gameService:GameService){}

  OnRestartClick(){
   this.gameService.Restart();
   console.log(this.gameService.buttonState);
  }
  OnStepBackClick(){

  }
}
