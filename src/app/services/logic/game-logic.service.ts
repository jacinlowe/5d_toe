import { Grid, State } from './../../home/home.page';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameLogicService {
  rowCompare: Array<State> = [];
  constructor() { }

  async checkForWinState(grid: Grid[]){

    grid.forEach((lastState: Grid, index: number) => {
      const last = lastState.lastState ? lastState.lastState : null;
      // console.log(last);
      // const push = last !== null &&
      // last.position === this.rowCompare[this.rowCompare.length -1 ].position ?
      // this.rowCompare.push(last) : null ;
      if (last !== null){
        const i = this.rowCompare.findIndex(x => x.position === last.position && x.size === last.size && x.letter === last.letter);
       return  i === -1 ? this.rowCompare.push(last): console.log('its already here');

      }

    });

    this.compareStates();
  }
  compareStates(){
    // Adding the compareState here
    // https://stackoverflow.com/questions/9973323/javascript-compare-3-values
    console.log(this.rowCompare);
        if(this.rowCompare.length > 2){
      const winRow = this.rowCompare[0].letter === (this.rowCompare[1].letter, this.rowCompare[2].letter);
      console.log('Win');
      return winRow;
    }
  }
}
