import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-squares',
  templateUrl: './squares.component.html',
  styleUrls: ['./squares.component.scss'],
})
export class SquaresComponent {
@Input() value: 'X' |'O' | undefined;
  constructor() { }



}
