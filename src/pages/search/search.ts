import { Component } from '@angular/core'
import { NavController, Platform } from 'ionic-angular'

@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})
export class SearchPage {
    congrat
    mustReadAll
    width
    popularGenre
    otherGenre
    inactive: string = 'inactive'
    explore: string = 'explore-wrap'

    constructor (
        public navCtrl: NavController,
        public platform: Platform
    ) {
        this.width = platform.width()
        let imgMargin = (this.width / 5 - 70) / 2
        console.log(imgMargin)
        this.congrat = {
            title: 'One Punch Man',
            image: 'assets/imgs/thumbnail-totoro.png',
            author: 'One'
        }
        this.mustReadAll = [
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-totoro.png',
                author: 'One',
                xAxis: imgMargin + 'px',
                yAxis: '0px',

            },
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-duckling-1.jpg',
                author: 'One',
                xAxis: imgMargin + 'px',
                yAxis: '100px'
            },
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-kitten-1.jpg',
                author: 'One',
                xAxis: this.width / 5 + imgMargin + 'px',
                yAxis: '50px'
            },
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-duckling-2.jpg',
                author: 'One',
                xAxis: this.width * 2 / 5 + imgMargin + 'px',
                yAxis: '0px'
            },
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-kitten-2.jpg',
                author: 'One',
                xAxis: this.width * 2 / 5 + imgMargin + 'px',
                yAxis: '100px'
            },
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-duckling-3.jpg',
                author: 'One',
                xAxis: this.width * 3 / 5 + imgMargin + 'px',
                yAxis: '50px'
            },
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-kitten-3.jpg',
                author: 'One',
                xAxis: this.width * 4 / 5 + imgMargin + 'px',
                yAxis: '0px'
            },
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-puppy-1.jpg',
                author: 'One',
                xAxis: this.width * 4 / 5 + imgMargin + 'px',
                yAxis: '100px'
            }
        ]
        this.otherGenre = [
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-totoro.png',
                author: 'One',
                genre: 'Shojo'

            },
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-duckling-1.jpg',
                author: 'One',
                genre: 'Mature'
            },
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-kitten-1.jpg',
                author: 'One',
                genre: 'School'
            },
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-duckling-2.jpg',
                author: 'One',
                genre: 'Material Art'
            },
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-kitten-2.jpg',
                author: 'One',
                genre: 'Comedy'
            }
        ]
        this.popularGenre = [
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-totoro.png',
                author: 'One',
                genre: 'Action'

            },
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-duckling-1.jpg',
                author: 'One',
                genre: 'Romance'
            },
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-kitten-1.jpg',
                author: 'One',
                genre: 'Fantasy'
            },
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-duckling-2.jpg',
                author: 'One',
                genre: 'Sport'
            },
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-kitten-2.jpg',
                author: 'One',
                genre: 'Slice of life'
            },
            {
                title: 'One Punch Man',
                image: 'assets/imgs/thumbnail-duckling-3.jpg',
                author: 'One',
                genre: 'Shounen'
            }
        ]
    }

    showAllGenre() {
        this.inactive = 'item';
        this.explore='inactive';
    }

}
