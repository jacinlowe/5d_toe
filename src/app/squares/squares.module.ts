import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SquaresComponent } from './squares.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule,],
  declarations: [SquaresComponent],
  exports: [SquaresComponent]
})
export class SquaresComponentModule {}
