import { Component } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent {
  listImages: string[] = ['https://www.automobile-magazine.fr/asset/cms/840x394/17801/config/16525/le-premier-quatre-cylindres-de-lhistoire-damg-ne-fait-pas-dans-la-dentelle-ses-360-ch-sont-savamment-atteles-a-quatre-bonnes-roues-motrices.jpg',
  'https://img.autojournal.fr/news/2018/03/21/1525596/8c6109c68e469397b86b6d40-900-600.jpg',
  'https://img.sportauto.fr/news/2016/10/26/1509945/c0ea35e5f604c9227afaac31-1920-1280.jpg'];
  activeImage = this.listImages[0];

  constructor() {
    this.changeImage();
  }

  changeImage(){
    let cpt = 0;
    setInterval(() => {
      if (cpt < this.listImages.length) {
        cpt++;
        console.log(cpt);
      } else {
        cpt = 0;
      }
      this.activeImage = this.listImages[cpt];
    }, 5000);
  }

}
