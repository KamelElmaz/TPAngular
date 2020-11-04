import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  gallerySelectedImage: number = 0;
  playerName: string = '';
  playerNum: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onFlock(event: any) {
    console.log(event);
    if (event === '-1'){
      console.log('no name');
    } else {
      this.playerName = event;
      let arr = this.playerName.split('-');
      this.playerName = arr[1];
      this.playerNum = arr[0];
    }
    this.gallerySelectedImage = 2; // t-shirt de dos
  }

}
