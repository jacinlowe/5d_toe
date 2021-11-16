
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  sizes: Array<IplayerSize>;
  constructor() {
  }

  createNewPlayer(icon: Icon): PlayerService {
    this.sizes = [...Array(7).keys()].map((nums) => ({ icon, num: nums + 1 }));
    return new PlayerService().createNewPlayer(icon);
  }
}



export type Icon = 'X' | 'O';
export interface IplayerSize{
  icon: Icon;
  num: number;
}
interface IplayerMove{
  size: IplayerSize;
  index: number;
}

interface Iplayer{
  sizes: IplayerSize;
  isCpu: boolean;
  strategy?: string;
  createNewPlayer: () => PlayerService;
  playMove: () => IplayerMove;
}
