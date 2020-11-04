import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PlayersService} from '../player.service';
import {Player} from '../../interfaces';

@Component({
  selector: 'app-flock',
  templateUrl: './flock.component.html',
  styleUrls: ['./flock.component.css']
})
export class FlockComponent implements OnInit {
  isFlockedSelected: boolean = false;
  players: string[];
  @Output() onFlock: EventEmitter<string> = new EventEmitter();

  constructor(private playersService: PlayersService) {
    this.players = this.playersService.getPlayers();
  }

  ngOnInit(): void {
  }

  selectFlock(value: boolean) {
    this.isFlockedSelected = value;
    if (!value){
      this.onFlock.emit('');
    }
  }
  selectPlayer(event: any) {
    let playerName: string = event.target.value;
    this.onFlock.emit(playerName);
  }
}
