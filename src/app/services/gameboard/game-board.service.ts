import { GameLogicService } from './../logic/game-logic.service';
import { Injectable } from '@angular/core';
import { Icon } from '../player/player.service';

@Injectable({
  providedIn: 'root'
})
export class GameBoardService {

  grid: Grid[];
  currentPlayer: Icon;
  private _cells = [...Array(9).keys()];


  public get cells() {
    // eslint-disable-next-line no-underscore-dangle
    return this._cells;
  }
  public set cells(value) {
    // eslint-disable-next-line no-underscore-dangle
    this._cells = value;
  }

  constructor() {

  }

  createGrid() {
    this.cells =  [...Array(9).keys()];
    this.grid = this.cells.map((items) => (
      { position: items, }
      ));

  }
  checkWinState() {
    const winState = new GameLogicService().checkForWinState(this.grid);
    return winState;
  }


}


export interface State {
  position: number;
  letter: Icon;
  size: number;};

export interface Grid{
  position: number;
  lastState?: State;

}
