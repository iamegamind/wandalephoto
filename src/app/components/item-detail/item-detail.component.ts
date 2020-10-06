import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input()
  itemName: string;
  @Input()
  itemPrice: string;
  @Input()
  itemDescription: string;
  @Input()
  itemSizes: number[];


  sizes = [28, 30, 32, 34, 36, 38, 40];

  constructor() {
  }

  ngOnInit(): void {
  }

}
