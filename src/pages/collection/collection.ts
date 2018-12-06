import { Component } from '@angular/core'
import { NavController } from 'ionic-angular'

@Component({
    selector: 'page-collection',
    templateUrl: 'collection.html'
})
export class CollectionPage {

    latest
    shelves

    constructor (public navCtrl: NavController) {
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
        this.shelves = [
            {
                name: 'My manga',
                no_books: 186,
                items: [
                    {
                        title: 'One Punch Man',
                        image: 'assets/imgs/thumbnail-totoro.png',
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
            },
            {
                name: 'My anime',
                no_books: 138,
                items: [
                    {
                        title: 'One Punch Man',
                        image: 'assets/imgs/thumbnail-totoro.png',
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
            },
            {
                name: 'My novel',
                no_books: 2,
                items: [
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
        ]
    }

}
