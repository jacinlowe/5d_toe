import { GameLogicService } from './../services/logic/game-logic.service';
import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';


import { IconSelectComponent } from '../popovers/icon-select/icon-select.component';

export interface State {
  position: number;
  letter: 'X' | 'O';
  size: number;};

export interface Grid{
  position: number;
  lastState?: State;

}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

cells = [...Array(9).keys()];
sizes = [...Array(7).keys()].map((nums) => nums + 1);
dataReturned: any;
playerLetter = 'X';
xIsNext: boolean;
winner = null;

private _grid: Grid[];
public get grid(): Grid[] {
  // eslint-disable-next-line no-underscore-dangle
  return this._grid;
}
public set grid(value: Grid[]) {
  // eslint-disable-next-line no-underscore-dangle
  this._grid = value;
  this.grid.map( ((thing,index) => {
    if(this.grid[index].lastState){ console.log(`This is the current Grid: ${ JSON.stringify(this.grid,null, 2) }` ); };
  }));
}
  constructor(
    public popoverController: PopoverController,
    private logic: GameLogicService,
  ) {}
    ngOnInit(){
      this.createGrid();
    }
    get player(){
      return this.xIsNext? 'X':'O';
    }
    createGrid(){
      this.grid = this.cells.map((items) => (
        { position: items, }
        ));

    }
    async presentPopover(ev: any, i: number){
      const data = {id: i, sizes: this.sizes};
      const popover = await this.popoverController.create({
        component: IconSelectComponent,
        cssClass: 'icon-custom-class',
        event: ev,
        translucent: true,
        componentProps: {
          data
        }
      });
      popover.onDidDismiss().then((dataReturned) => {
        if (i !== undefined){
          this.setLastState(dataReturned, i);
          this.xIsNext = !this.xIsNext;
        }

      }).catch((error) =>{
        console.log(error);
      });

      return await popover.present();
    }

    setLastState(popoverData: any, id: number){
      if(popoverData !== null){
        this.grid[id].lastState = {position: popoverData.data.id, letter: this.player, size: popoverData.data.item };
        this.removeUsedSize(popoverData.data.item);
        this.winner = this.logic.checkForWinState(this.grid);
      }

      this.autoReset();
    }
    removeUsedSize(size: number){
      if (this.sizes.includes(size)){
        const index = this.sizes.indexOf(size);

        this.sizes.splice(index, 1);

      }

    }
    autoReset(){
      if (this.winner){
        console.log('game will reset' );
        setTimeout(() => {

          this.resetGame();
        }, 2500);
      }
    }
    resetGame(){
      console.log('game reset');
      this.logic.resetStates();
      this.winner = null;
      this.sizes = [...Array(7).keys()].map((nums) => nums + 1);
      this.cells = [...Array(9).keys()];
      this.createGrid();
    }
}
