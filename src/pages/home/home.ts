import { Component } from '@angular/core'
import { NavController, ActionSheetController, ModalController } from 'ionic-angular'
import { ShelfPage } from '../shelf/shelf'
import moment from 'moment'

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    friends

    constructor (
        public navCtrl: NavController,
        public actionsheetCtrl: ActionSheetController,
        public modalCtrl: ModalController
    ) {
        this.friends = [
            {
                name: 'Thao Tran',
                ava: 'assets/imgs/marty-avatar.png',
                item : {
                    title: 'One Punch Man',
                    image: 'assets/imgs/thumbnail-totoro.png',
                    author: 'One',
                    publishYear: '1988',
                    noLike: 12,
                    noComment: 4,
                    star: 3,
                    timeOfRate: moment('2018-12-06 12:00:03').format('MMMM Do YYYY'),
                    myConnection: {
                    }
                }
            },
            {
                name: 'Andre Gonzalez',
                ava: 'assets/imgs/marty-avatar.png',
                item : {
                    title: 'Twinkle, Twinkle, Little Star',
                    image: 'assets/imgs/thumbnail-totoro.png',
                    author: 'Iza Trapani',
                    publishYear: '2016',
                    noLike: 11,
                    noComment: 0,
                    star: 5,
                    timeOfRate: moment('2018-12-01 12:00:03').format('MMMM Do YYYY'),
                    myConnection: {
                        myShelf: 'My manga',
                        myRate: 5
                    }
                }
            }
        ]
    }

    openRateMenu () {
        let actionSheet = this.actionsheetCtrl.create({
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: '1 Star',
                    icon: 'star-rating1',
                    handler: () => {
                        console.log('1 star clicked')
                    }
                },
                {
                    text: '2 Stars',
                    icon: 'star-rating2',
                    handler: () => {
                        console.log('2 stars clicked')
                    }
                },
                {
                    text: '3 Stars',
                    icon: 'star-rating3',
                    handler: () => {
                        console.log('3 stars clicked')
                    }
                },
                {
                    text: '4 Stars',
                    icon: 'star-rating4',
                    handler: () => {
                        console.log('4 stars clicked')
                    }
                },
                {
                    text: '5 Stars',
                    icon: 'star-rating5',
                    handler: () => {
                        console.log('5 stars clicked')
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel', // will always sort to be on the bottom
                    icon: null,
                    handler: () => {
                        console.log('Cancel clicked')
                    }
                }
            ]
        })
        actionSheet.present()
    }

    showShelf (characterNum) {
        let modal = this.modalCtrl.create(ShelfPage, characterNum)
        modal.present()
    }

}
