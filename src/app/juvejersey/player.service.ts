import { Injectable } from '@angular/core';
import {Player} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  private players: string[] = ['7 - Ronaldo', '8 - Ramsey', '10 - Dybala'];

  constructor() { }

  getPlayers(): string[] {
    return this.players;
  }
}
