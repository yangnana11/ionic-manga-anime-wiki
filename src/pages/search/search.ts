import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {
  congrat

  constructor(public navCtrl: NavController) {
    this.congrat = {
        title: 'One Punch Man',
        image: 'assets/imgs/thumbnail-totoro.png',
        author: 'One'
    }
  }

}
