import { Component } from '@angular/core'
import { NavController, ActionSheetController, ModalController } from 'ionic-angular'
import { ShelfPage } from '../shelf/shelf'

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor (
        public navCtrl: NavController,
        public actionsheetCtrl: ActionSheetController,
        public modalCtrl: ModalController
    ) { }

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

    showShelf(characterNum) {
        let modal = this.modalCtrl.create(ShelfPage, characterNum);
        modal.present();
    }

}
