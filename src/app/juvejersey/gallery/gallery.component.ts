import {Component, Input, OnInit} from '@angular/core';

const IMAGE_DIR = 'assets/maillotJuve/';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: string[] = [];
  @Input() selectedImage: number = 0;
  @Input() playerName: string = '';
  @Input() playerNum: string = '';

  constructor() { }

  ngOnInit(): void {
    let a = new Array(4).fill(0);
    this.images = a.map((n, i) => IMAGE_DIR + (i + 1) + '.jpg');
  }

  selectImage(index: number) {
    this.selectedImage = index;

    if (index !== 2){
      this.playerName = '';
      this.playerNum = '';
    }
  }

}
