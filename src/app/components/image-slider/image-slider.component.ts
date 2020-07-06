import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {interval} from 'rxjs';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class ImageSliderComponent implements OnInit {

  constructor() {
  }

  index = 0;
  numImages = 5;
  imagesLoaded = 0;
  loading = true;

  imagesUrl = [
    '../../../assets/img/aw17/aw17-1.jpg',
    '../../../assets/img/aw17/aw17-5.jpg',
    '../../../assets/img/aw17/aw17-3.jpg',
    '../../../assets/img/aw17/aw17-4.jpg',
    '../../../assets/img/aw17/aw17-27.jpg',
  ];

  ngOnInit() {


    this.imagesUrl.forEach((x, index) => {
      const image = new Image();
      image.onload = (() => {
        this.imagesLoaded++;
        this.loading = (this.imagesLoaded !== this.numImages);
        console.log(`is loading: ${this.loading}`);
      });
      image.src = x;
    });
    interval(5000).subscribe(() => {
      if (!this.loading) {
        this.index = (this.index + 1) % this.numImages;
        console.log(`interval - ${this.index}`);
      }
    });
  }
}
