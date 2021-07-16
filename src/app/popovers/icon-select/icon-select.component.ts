import { Component, Input, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-icon-select',
  templateUrl: './icon-select.component.html',
  styleUrls: ['./icon-select.component.scss'],
})
export class IconSelectComponent implements OnInit {
 @Input() data: any;
 sizes: any;
  constructor(private popover: PopoverController) {


  }

  ngOnInit() {
    this.sizes = this.data.sizes;

    console.log(this.sizes);
  }

  closePopover(item: number){
    const data = {id: this.data.id, item};
    this.popover.dismiss(data);
  }
}
