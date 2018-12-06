webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__collection_collection__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__collection_collection__["a" /* CollectionPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="My Shelves" tabIcon="book"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Search" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Scan" tabIcon="barcode"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="More" tabIcon="menu"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/contact/contact.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Contact\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n    <ion-item>\n      <ion-icon name="ionic" item-start></ion-icon>\n      @ionicframework\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shelf_shelf__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, actionsheetCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.actionsheetCtrl = actionsheetCtrl;
        this.modalCtrl = modalCtrl;
        this.friends = [
            {
                name: 'Thao Tran',
                ava: 'assets/imgs/marty-avatar.png',
                item: {
                    title: 'One Punch Man',
                    image: 'assets/imgs/thumbnail-totoro.png',
                    author: 'One',
                    publishYear: '1988',
                    noLike: 12,
                    noComment: 4,
                    star: 3,
                    timeOfRate: __WEBPACK_IMPORTED_MODULE_3_moment___default()('2018-12-06 12:00:03').format('MMMM Do YYYY'),
                    myConnection: {}
                }
            },
            {
                name: 'Andre Gonzalez',
                ava: 'assets/imgs/marty-avatar.png',
                item: {
                    title: 'Twinkle, Twinkle, Little Star',
                    image: 'assets/imgs/thumbnail-totoro.png',
                    author: 'Iza Trapani',
                    publishYear: '2016',
                    noLike: 11,
                    noComment: 0,
                    star: 5,
                    timeOfRate: __WEBPACK_IMPORTED_MODULE_3_moment___default()('2018-12-01 12:00:03').format('MMMM Do YYYY'),
                    myConnection: {
                        myShelf: 'My manga',
                        myRate: 5
                    }
                }
            }
        ];
    }
    HomePage.prototype.openRateMenu = function () {
        var actionSheet = this.actionsheetCtrl.create({
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: '1 Star',
                    icon: 'star-rating1',
                    handler: function () {
                        console.log('1 star clicked');
                    }
                },
                {
                    text: '2 Stars',
                    icon: 'star-rating2',
                    handler: function () {
                        console.log('2 stars clicked');
                    }
                },
                {
                    text: '3 Stars',
                    icon: 'star-rating3',
                    handler: function () {
                        console.log('3 stars clicked');
                    }
                },
                {
                    text: '4 Stars',
                    icon: 'star-rating4',
                    handler: function () {
                        console.log('4 stars clicked');
                    }
                },
                {
                    text: '5 Stars',
                    icon: 'star-rating5',
                    handler: function () {
                        console.log('5 stars clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.showShelf = function (characterNum) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__shelf_shelf__["a" /* ShelfPage */], characterNum);
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/home/home.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-searchbar placeholder="Search by title, author or tag"></ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngFor="let friend of friends">\n\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="{{friend.ava}}">\n            </ion-avatar>\n            <h2 text-wrap><span class="focus-label">{{friend.name}}</span> gave {{friend.item.star}} stars to <span\n                    class="focus-label">{{friend.item.title}}</span>\n                by <span class="focus-label">{{friend.item.author}}</span></h2>\n            <p class="desp-label">{{friend.item.timeOfRate}}</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="{{friend.item.image}}">\n            </ion-thumbnail>\n            <h2>{{friend.item.title}}</h2>\n            <p class="desp-label">by {{friend.item.author}} • {{friend.item.publishYear}}</p>\n            <button *ngIf="(friend.item.myConnection | json) == \'{}\'" class="shelf-button">\n                Add to checklist\n                <button class="shelf-arrow" (click)="showShelf({charNum: 0})">\n                    <ion-icon name="arrow-down"></ion-icon>\n                </button>\n            </button>\n            <button *ngIf="(friend.item.myConnection | json) != \'{}\'" class="shelf-button-added">\n                My manga\n                <button class="shelf-arrow" (click)="showShelf({charNum: 0})">\n                    <ion-icon name="arrow-down"></ion-icon>\n                </button>\n            </button>\n            <p class="rating">Rate this manga:\n                <button (click)="openRateMenu()">\n                    <ng-template\n                            *ngIf="1<=friend.item.star;then rated; else notRate">\n                    </ng-template>\n                    <ng-template\n                            *ngIf="2<=friend.item.star;then rated; else notRate">\n                    </ng-template>\n                    <ng-template\n                            *ngIf="3<=friend.item.star;then rated; else notRate">\n                    </ng-template>\n                    <ng-template\n                            *ngIf="4<=friend.item.star;then rated; else notRate">\n                    </ng-template>\n                    <ng-template\n                            *ngIf="5<=friend.item.star;then rated; else notRate">\n                    </ng-template>\n                    <ng-template #rated>\n                        <ion-icon name="star"></ion-icon>\n                    </ng-template>\n\n                    <ng-template #notRate>\n                        <ion-icon name="star-outline"></ion-icon>\n                    </ng-template>\n            </button>\n            </p>\n        </ion-item>\n\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-start clear small class="social">\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <div>{{friend.item.noLike}} Likes</div>\n                </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button icon-start clear small class="social">\n                    <ion-icon name="text"></ion-icon>\n                    <div>{{friend.item.noComment}} Comments</div>\n                </button>\n            </ion-col>\n        </ion-row>\n\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShelfPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShelfPage = /** @class */ (function () {
    function ShelfPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
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
    ShelfPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ShelfPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-shelf',template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/shelf/shelf.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Add to my Collection\n        </ion-title>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n                <span ion-text color="primary" showWhen="ios">Cancel</span>\n                <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-content>\n        <ion-list radio-group>\n            <ion-item *ngFor="let item of character[\'items\']">\n                <ion-label class="shelf-item">\n                    <ion-thumbnail item-start>\n                        <img src="{{item.image}}">\n                    </ion-thumbnail>\n                    <ion-label>\n                        <h2> {{item.title}}</h2>\n                        <p class="desp-label">{{item.count}} {{item.unit}}</p>\n                    </ion-label>\n                </ion-label>\n                <ion-radio checked="{{item.check}}" value="{{item.value}}"></ion-radio>\n            </ion-item>\n            <ion-item>\n                <ion-input placeholder="Create a new shelf"></ion-input>\n            </ion-item>\n\n        </ion-list>\n    </ion-content>\n\n    <button ion-button full class="remove-button">\n        Remove from shelf\n    </button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/shelf/shelf.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]])
    ], ShelfPage);
    return ShelfPage;
}());

//# sourceMappingURL=shelf.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollectionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollectionPage = /** @class */ (function () {
    function CollectionPage(navCtrl) {
        this.navCtrl = navCtrl;
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
        ];
        this.shelves = [
            {
                name: 'My manga',
                no_books: 186,
                items: [
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
            },
            {
                name: 'My anime',
                no_books: 138,
                items: [
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
        ];
        this.genres = [
            {
                name: 'shounen'
            },
            {
                name: 'comedy'
            },
            {
                name: 'sport'
            },
            {
                name: 'fantasy'
            },
            {
                name: 'action'
            }
        ];
    }
    CollectionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-collection',template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/collection/collection.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="header-title">\n            My Collection\n        </ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only>\n                <ion-icon name="add"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-searchbar placeholder="Search in your shelves" class="search-box"></ion-searchbar>\n    <div class="title-flex">\n        <span>my latest added items:</span>\n        <span class="right">see all</span>\n    </div>\n    <ion-slides class="slide-wrap">\n        <ion-slide *ngFor="let item of latest">\n            <!--<div style=\'background-image: url("assets/imgs/thumbnail-totoro.png"); width: 100%; height: 100px\'></div>-->\n            <!--<ion-item [style.backgroundImage]="\'url(\'+item.image+\')\'">-->\n            <div class="slide-border">\n                <div [ngStyle]="{\'background-image\': \'url(\' + item.image + \')\'}" class="slide">\n                </div>\n            </div>\n            <ion-item class="slide-item">\n                <ion-thumbnail item-start>\n                    <img src="{{item.image}}">\n                </ion-thumbnail>\n                <h2>{{item.title}}</h2>\n                <p class="desp">by {{item.author}}</p>\n            </ion-item>\n        </ion-slide>\n    </ion-slides>\n    <div *ngFor="let shelf of shelves" class="shelf-item">\n        <div class="shelf-thumbnail">\n            <ion-thumbnail>\n                <img src="{{shelf.items[0].image}}">\n            </ion-thumbnail>\n            <ion-thumbnail *ngIf="shelf.items.length > 1" class="back1">\n                <img src="{{shelf.items[1].image}}">\n            </ion-thumbnail>\n            <ion-thumbnail *ngIf="shelf.items.length > 2" class="back2">\n                <img src="{{shelf.items[2].image}}">\n            </ion-thumbnail>\n        </div>\n        <div class="shelf-desp">\n            <p class="shelf-title">{{shelf.name}}</p>\n            <p class="shelf-desp">{{shelf.no_books}} items</p>\n        </div>\n    </div>\n    <button class="create-button">\n        <ion-icon name="add"></ion-icon>\n        <span>Create a new shelf</span>\n    </button>\n    <div class="genre-suggestion">\n        <div class="title-flex">\n            <span>add items from favourite genres:</span>\n            <span class="right">edit</span>\n        </div>\n        <ion-slides class="genre-list-wrap" slidesPerView="3" spaceBetween="10">\n\n            <ion-slide *ngFor="let genre of genres">\n                <h2>{{genre.name}}</h2>\n            </ion-slide>\n            <ion-slide class="add-more">\n                <span>\n                    <ion-icon name="add"></ion-icon>\n                    <div>Add more favourite genres</div>\n                </span>\n            </ion-slide>\n\n        </ion-slides>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/collection/collection.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], CollectionPage);
    return CollectionPage;
    var _a;
}());

//# sourceMappingURL=collection.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(345);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_shelf_shelf__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_collection_collection__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_collection_collection__["a" /* CollectionPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_shelf_shelf__["a" /* ShelfPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_collection_collection__["a" /* CollectionPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_shelf_shelf__["a" /* ShelfPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 388:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 198,
	"./af.js": 198,
	"./ar": 199,
	"./ar-dz": 200,
	"./ar-dz.js": 200,
	"./ar-kw": 201,
	"./ar-kw.js": 201,
	"./ar-ly": 202,
	"./ar-ly.js": 202,
	"./ar-ma": 203,
	"./ar-ma.js": 203,
	"./ar-sa": 204,
	"./ar-sa.js": 204,
	"./ar-tn": 205,
	"./ar-tn.js": 205,
	"./ar.js": 199,
	"./az": 206,
	"./az.js": 206,
	"./be": 207,
	"./be.js": 207,
	"./bg": 208,
	"./bg.js": 208,
	"./bm": 209,
	"./bm.js": 209,
	"./bn": 210,
	"./bn.js": 210,
	"./bo": 211,
	"./bo.js": 211,
	"./br": 212,
	"./br.js": 212,
	"./bs": 213,
	"./bs.js": 213,
	"./ca": 214,
	"./ca.js": 214,
	"./cs": 215,
	"./cs.js": 215,
	"./cv": 216,
	"./cv.js": 216,
	"./cy": 217,
	"./cy.js": 217,
	"./da": 218,
	"./da.js": 218,
	"./de": 219,
	"./de-at": 220,
	"./de-at.js": 220,
	"./de-ch": 221,
	"./de-ch.js": 221,
	"./de.js": 219,
	"./dv": 222,
	"./dv.js": 222,
	"./el": 223,
	"./el.js": 223,
	"./en-au": 224,
	"./en-au.js": 224,
	"./en-ca": 225,
	"./en-ca.js": 225,
	"./en-gb": 226,
	"./en-gb.js": 226,
	"./en-ie": 227,
	"./en-ie.js": 227,
	"./en-il": 228,
	"./en-il.js": 228,
	"./en-nz": 229,
	"./en-nz.js": 229,
	"./eo": 230,
	"./eo.js": 230,
	"./es": 231,
	"./es-do": 232,
	"./es-do.js": 232,
	"./es-us": 233,
	"./es-us.js": 233,
	"./es.js": 231,
	"./et": 234,
	"./et.js": 234,
	"./eu": 235,
	"./eu.js": 235,
	"./fa": 236,
	"./fa.js": 236,
	"./fi": 237,
	"./fi.js": 237,
	"./fo": 238,
	"./fo.js": 238,
	"./fr": 239,
	"./fr-ca": 240,
	"./fr-ca.js": 240,
	"./fr-ch": 241,
	"./fr-ch.js": 241,
	"./fr.js": 239,
	"./fy": 242,
	"./fy.js": 242,
	"./gd": 243,
	"./gd.js": 243,
	"./gl": 244,
	"./gl.js": 244,
	"./gom-latn": 245,
	"./gom-latn.js": 245,
	"./gu": 246,
	"./gu.js": 246,
	"./he": 247,
	"./he.js": 247,
	"./hi": 248,
	"./hi.js": 248,
	"./hr": 249,
	"./hr.js": 249,
	"./hu": 250,
	"./hu.js": 250,
	"./hy-am": 251,
	"./hy-am.js": 251,
	"./id": 252,
	"./id.js": 252,
	"./is": 253,
	"./is.js": 253,
	"./it": 254,
	"./it.js": 254,
	"./ja": 255,
	"./ja.js": 255,
	"./jv": 256,
	"./jv.js": 256,
	"./ka": 257,
	"./ka.js": 257,
	"./kk": 258,
	"./kk.js": 258,
	"./km": 259,
	"./km.js": 259,
	"./kn": 260,
	"./kn.js": 260,
	"./ko": 261,
	"./ko.js": 261,
	"./ky": 262,
	"./ky.js": 262,
	"./lb": 263,
	"./lb.js": 263,
	"./lo": 264,
	"./lo.js": 264,
	"./lt": 265,
	"./lt.js": 265,
	"./lv": 266,
	"./lv.js": 266,
	"./me": 267,
	"./me.js": 267,
	"./mi": 268,
	"./mi.js": 268,
	"./mk": 269,
	"./mk.js": 269,
	"./ml": 270,
	"./ml.js": 270,
	"./mn": 271,
	"./mn.js": 271,
	"./mr": 272,
	"./mr.js": 272,
	"./ms": 273,
	"./ms-my": 274,
	"./ms-my.js": 274,
	"./ms.js": 273,
	"./mt": 275,
	"./mt.js": 275,
	"./my": 276,
	"./my.js": 276,
	"./nb": 277,
	"./nb.js": 277,
	"./ne": 278,
	"./ne.js": 278,
	"./nl": 279,
	"./nl-be": 280,
	"./nl-be.js": 280,
	"./nl.js": 279,
	"./nn": 281,
	"./nn.js": 281,
	"./pa-in": 282,
	"./pa-in.js": 282,
	"./pl": 283,
	"./pl.js": 283,
	"./pt": 284,
	"./pt-br": 285,
	"./pt-br.js": 285,
	"./pt.js": 284,
	"./ro": 286,
	"./ro.js": 286,
	"./ru": 287,
	"./ru.js": 287,
	"./sd": 288,
	"./sd.js": 288,
	"./se": 289,
	"./se.js": 289,
	"./si": 290,
	"./si.js": 290,
	"./sk": 291,
	"./sk.js": 291,
	"./sl": 292,
	"./sl.js": 292,
	"./sq": 293,
	"./sq.js": 293,
	"./sr": 294,
	"./sr-cyrl": 295,
	"./sr-cyrl.js": 295,
	"./sr.js": 294,
	"./ss": 296,
	"./ss.js": 296,
	"./sv": 297,
	"./sv.js": 297,
	"./sw": 298,
	"./sw.js": 298,
	"./ta": 299,
	"./ta.js": 299,
	"./te": 300,
	"./te.js": 300,
	"./tet": 301,
	"./tet.js": 301,
	"./tg": 302,
	"./tg.js": 302,
	"./th": 303,
	"./th.js": 303,
	"./tl-ph": 304,
	"./tl-ph.js": 304,
	"./tlh": 305,
	"./tlh.js": 305,
	"./tr": 306,
	"./tr.js": 306,
	"./tzl": 307,
	"./tzl.js": 307,
	"./tzm": 308,
	"./tzm-latn": 309,
	"./tzm-latn.js": 309,
	"./tzm.js": 308,
	"./ug-cn": 310,
	"./ug-cn.js": 310,
	"./uk": 311,
	"./uk.js": 311,
	"./ur": 312,
	"./ur.js": 312,
	"./uz": 313,
	"./uz-latn": 314,
	"./uz-latn.js": 314,
	"./uz.js": 313,
	"./vi": 315,
	"./vi.js": 315,
	"./x-pseudo": 316,
	"./x-pseudo.js": 316,
	"./yo": 317,
	"./yo.js": 317,
	"./zh-cn": 318,
	"./zh-cn.js": 318,
	"./zh-hk": 319,
	"./zh-hk.js": 319,
	"./zh-tw": 320,
	"./zh-tw.js": 320
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 397;

/***/ })

},[322]);
//# sourceMappingURL=main.js.map