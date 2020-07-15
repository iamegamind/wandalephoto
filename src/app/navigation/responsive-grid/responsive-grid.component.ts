import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-responsive-grid',
  templateUrl: './responsive-grid.component.html',
  styleUrls: ['./responsive-grid.component.scss']
})
export class ResponsiveGridComponent implements OnInit {

  gridItems = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}];

  constructor() {
  }

  ngOnInit(): void {
  }

}
