import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-collection',
  templateUrl: 'collection.html'
})
export class CollectionPage {

  latest;

  constructor(public navCtrl: NavController) {
    this.latest = [
        {
            title: 'One Punch Man',
            image: 'assets/imgs/thumbnail-totoro.png',
            author: 'One'
        },
        {
            title: 'One Punch Man',
            image: 'assets/imgs/advance-card-bttf.png',
            author: 'One'
        },
        {
            title: 'One Punch Man',
            image: 'assets/imgs/thumbnail-totoro.png',
            author: 'One'
        },
        {
            title: 'One Punch Man',
            image: 'assets/imgs/advance-card-bttf.png',
            author: 'One'
        }
    ]
  }

}
