import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {
    title: string

    constructor (
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        this.title = this.navParams.get('title');
    }

}
