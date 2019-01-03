import { Component } from '@angular/core'
import { NavController, NavParams } from 'ionic-angular'

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})
export class ListPage {
    title: string
    list

    constructor (
        public navCtrl: NavController,
        public navParams: NavParams
    ) {
        this.title = this.navParams.get('title')
        let id = this.navParams.get('id')
        if (id == 0) {
            this.list = [
                {
                    title: 'One Punch Man',
                    image: 'assets/imgs/thumbnail-totoro.png',
                    author: 'One',
                    publishYear: '1988',
                    noRate: this.numberWithCommas(1862),
                    star: 3.75
                },
                {
                    title: 'One Punch Man',
                    image: 'assets/imgs/thumbnail-totoro.png',
                    author: 'One',
                    publishYear: '1988',
                    noRate: this.numberWithCommas(1862),
                    star: 3.5
                },
                {
                    title: 'One Punch Man',
                    image: 'assets/imgs/thumbnail-totoro.png',
                    author: 'One',
                    publishYear: '1988',
                    noRate: this.numberWithCommas(1862),
                    star: 3
                }
            ]
        } else if (id == 1) {
            this.list = [
                {
                    title: 'Totoro',
                    image: 'assets/imgs/thumbnail-totoro.png',
                    author: 'One',
                    publishYear: '1988',
                    noRate: this.numberWithCommas(1862),
                    star: 4.8
                },
                {
                    title: 'Totoro',
                    image: 'assets/imgs/thumbnail-totoro.png',
                    author: 'One',
                    publishYear: '1988',
                    noRate: this.numberWithCommas(1862),
                    star: 3
                },
                {
                    title: 'Totoro',
                    image: 'assets/imgs/thumbnail-totoro.png',
                    author: 'One',
                    publishYear: '1988',
                    noRate: this.numberWithCommas(1862),
                    star: 4.1
                }
            ]
        } else {
            this.list = [
                {
                    title: 'E.M.C',
                    image: 'assets/imgs/thumbnail-totoro.png',
                    author: 'One',
                    publishYear: '1988',
                    noRate: this.numberWithCommas(1862),
                    star: 3
                },
                {
                    title: 'E.M.C',
                    image: 'assets/imgs/thumbnail-totoro.png',
                    author: 'One',
                    publishYear: '1988',
                    noRate: this.numberWithCommas(1862),
                    star: 2.9
                },
                {
                    title: 'E.M.C',
                    image: 'assets/imgs/thumbnail-totoro.png',
                    author: 'One',
                    publishYear: '1988',
                    noRate: this.numberWithCommas(1862),
                    star: 4.6
                }
            ]
        }
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

}
