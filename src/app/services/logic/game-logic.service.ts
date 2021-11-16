/* eslint-disable guard-for-in */
import { Grid, State } from './../../home/home.page';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {
  rowCompare: Array<State> = [];
  winState: any;
  constructor() { }

   checkForWinState(grid: Grid[]): string{
    this.winState = this.calculateWinner(grid);
    return this.winState;
    // this.compareStates();
  }

  lastItem(arr: Array<any>): number{
    return arr.length - 1;
  }
  secondLastItem(arr: Array<any>): number{
    return arr.length - 2;
  }
  thirdLastItem(arr: Array<any>): number{
    return arr.length - 3;
  }


  calculateWinner(squares: Grid[]): string {
    //winning combinations go here
    const lines = [
      // horizontals
    [0,1,2], [3,4,5], [6,7,8],
    // virts
    [0,3,6], [1,4,7], [2,5,8],
    // diagnals
    [0,4,8], [2,4,6]
    ];

    for (const i in lines){
      // console.log(lines[i]);
      try {
        const [a,b,c] = lines[i];


        if (
        squares[a].lastState.letter &&
        squares[a].lastState.letter === squares[b].lastState.letter &&
        squares[a].lastState.letter === squares[c].lastState.letter
      ){
        console.log('you did it', squares[a].lastState.letter);
        return squares[a].lastState.letter;
      }

      } catch (error) {

      }
    }
      return null;
    }

  resetStates(){
    this.winState = false;
    this.rowCompare = [];
  }
}
