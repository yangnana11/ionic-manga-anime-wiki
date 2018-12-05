import { Component } from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';


@Component({
    selector: 'page-shelf',
    templateUrl: 'shelf.html'
})
export class ShelfPage {
    character;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {
        var characters = [
            {
                name: 'Gollum',
                quote: 'Sneaky little hobbitses!',
                items: [
                    { title: 'My manga', image: 'assets/imgs/thumbnail-totoro.png', check: 'true', value: 'manga', count: 186, unit: 'manga(s)' },
                    { title: 'My anime', image: 'assets/imgs/thumbnail-totoro.png', check: 'false', value: 'anime', count: 13, unit: 'anime(s)' },
                    { title: 'My novel', image: 'assets/imgs/thumbnail-totoro.png', check: 'false', value: 'novel', count: 138, unit: 'novel(s)' }
                ]
            }
        ];
        this.character = characters[this.params.get('charNum')];
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
