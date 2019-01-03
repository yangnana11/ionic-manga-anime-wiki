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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__collection_collection__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(321);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__collection_collection__["a" /* CollectionPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */];
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shelf_shelf__ = __webpack_require__(196);
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

/***/ 196:
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

/***/ 320:
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], CollectionPage);
    return CollectionPage;
}());

//# sourceMappingURL=collection.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_list__ = __webpack_require__(398);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, platform) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.inactive = 'inactive';
        this.explore = 'explore-wrap';
        this.width = platform.width();
        var imgMargin = (this.width / 5 - 70) / 2;
        console.log(imgMargin);
        this.congrat = {
            title: 'One Punch Man',
            image: 'assets/imgs/thumbnail-totoro.png',
            author: 'One'
        };
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
        ];
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
        ];
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
        ];
        this.mustReadMonth = [
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
        ];
        this.newMonth = [
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
        ];
        this.newYear = [
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
        ];
        this.listPage = __WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */];
        this.listParam1 = {
            id: 0,
            title: 'Most read this week'
        };
        this.listParam2 = {
            id: 1,
            title: 'New release this month'
        };
        this.listParam3 = {
            id: 2,
            title: 'New release this year'
        };
    }
    SearchPage.prototype.showAllGenre = function () {
        this.inactive = 'item';
        this.explore = 'inactive';
    };
    SearchPage.prototype.seeAll = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__list_list__["a" /* ListPage */]);
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/search/search.html"*/'<ion-header>\n    <ion-toolbar>\n        <ion-searchbar placeholder="Search by title, author or tag"></ion-searchbar>\n    </ion-toolbar>\n    <div class="menu-wrap">\n        <div class="menu-item active">\n            <ion-icon name="apps"></ion-icon>\n            <div>All</div>\n        </div>\n        <div class="menu-item">\n            <ion-icon name="image"></ion-icon>\n            <div>Manga</div>\n        </div>\n        <div class="menu-item">\n            <ion-icon name="videocam"></ion-icon>\n            <div>Anime</div>\n        </div>\n        <div class="menu-item">\n            <ion-icon name="book"></ion-icon>\n            <div>Novel</div>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class="top">\n        <div *ngFor="let item of mustReadAll">\n            <img src="{{item.image}}" alt="" [style.left]="item.xAxis" [style.top]="item.yAxis">\n        </div>\n    </div>\n    <div padding class="popular-genre">\n        <div class="title">explore genres by popularity</div>\n        <div class="list">\n            <div *ngFor="let item of popularGenre" class="item">\n                <div class="genre">{{item.genre}}</div>\n                <div class="background" [style.backgroundImage]="\'url(\' + item.image + \')\'"></div>\n            </div>\n            <div *ngFor="let item of otherGenre" class={{inactive}}>\n                <div class="genre">{{item.genre}}</div>\n                <div class="background" [style.backgroundImage]="\'url(\' + item.image + \')\'"></div>\n            </div>\n        </div>\n        <div class={{explore}}>\n            <button class="explore" (click)="showAllGenre()">explore all genres</button>\n        </div>\n    </div>\n    <div class="most-read" padding>\n        <div class="title-left">most read this week</div>\n        <div class="title-right" [navPush]="listPage" [navParams]="listParam1">see all</div>\n\n        <ion-slides class="most-list" slidesPerView="3" spaceBetween="10">\n\n            <ion-slide *ngFor="let item of mustReadMonth" class="item-list">\n                <img src="{{item.image}}" alt="">\n            </ion-slide>\n\n        </ion-slides>\n    </div>\n\n    <div class="most-read" padding>\n        <div class="title-left">new release this month</div>\n        <div class="title-right" [navPush]="listPage" [navParams]="listParam2">see all</div>\n\n        <ion-slides class="most-list" slidesPerView="3" spaceBetween="10">\n\n            <ion-slide *ngFor="let item of newMonth" class="item-list">\n                <img src="{{item.image}}" alt="">\n            </ion-slide>\n\n        </ion-slides>\n    </div>\n\n    <div class="most-read" padding>\n        <div class="title-left">new release this year</div>\n        <div class="title-right" [navPush]="listPage" [navParams]="listParam3">see all</div>\n\n        <ion-slides class="most-list" slidesPerView="3" spaceBetween="10">\n\n            <ion-slide *ngFor="let item of newYear" class="item-list">\n                <img src="{{item.image}}" alt="">\n            </ion-slide>\n\n        </ion-slides>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object])
    ], SearchPage);
    return SearchPage;
    var _a, _b;
}());

//# sourceMappingURL=search.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_shelf_shelf__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_collection_collection__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_search_search__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(398);
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
                __WEBPACK_IMPORTED_MODULE_9__pages_collection_collection__["a" /* CollectionPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_shelf_shelf__["a" /* ShelfPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */]
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
                __WEBPACK_IMPORTED_MODULE_9__pages_collection_collection__["a" /* CollectionPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_shelf_shelf__["a" /* ShelfPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
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
	"./af": 197,
	"./af.js": 197,
	"./ar": 198,
	"./ar-dz": 199,
	"./ar-dz.js": 199,
	"./ar-kw": 200,
	"./ar-kw.js": 200,
	"./ar-ly": 201,
	"./ar-ly.js": 201,
	"./ar-ma": 202,
	"./ar-ma.js": 202,
	"./ar-sa": 203,
	"./ar-sa.js": 203,
	"./ar-tn": 204,
	"./ar-tn.js": 204,
	"./ar.js": 198,
	"./az": 205,
	"./az.js": 205,
	"./be": 206,
	"./be.js": 206,
	"./bg": 207,
	"./bg.js": 207,
	"./bm": 208,
	"./bm.js": 208,
	"./bn": 209,
	"./bn.js": 209,
	"./bo": 210,
	"./bo.js": 210,
	"./br": 211,
	"./br.js": 211,
	"./bs": 212,
	"./bs.js": 212,
	"./ca": 213,
	"./ca.js": 213,
	"./cs": 214,
	"./cs.js": 214,
	"./cv": 215,
	"./cv.js": 215,
	"./cy": 216,
	"./cy.js": 216,
	"./da": 217,
	"./da.js": 217,
	"./de": 218,
	"./de-at": 219,
	"./de-at.js": 219,
	"./de-ch": 220,
	"./de-ch.js": 220,
	"./de.js": 218,
	"./dv": 221,
	"./dv.js": 221,
	"./el": 222,
	"./el.js": 222,
	"./en-au": 223,
	"./en-au.js": 223,
	"./en-ca": 224,
	"./en-ca.js": 224,
	"./en-gb": 225,
	"./en-gb.js": 225,
	"./en-ie": 226,
	"./en-ie.js": 226,
	"./en-il": 227,
	"./en-il.js": 227,
	"./en-nz": 228,
	"./en-nz.js": 228,
	"./eo": 229,
	"./eo.js": 229,
	"./es": 230,
	"./es-do": 231,
	"./es-do.js": 231,
	"./es-us": 232,
	"./es-us.js": 232,
	"./es.js": 230,
	"./et": 233,
	"./et.js": 233,
	"./eu": 234,
	"./eu.js": 234,
	"./fa": 235,
	"./fa.js": 235,
	"./fi": 236,
	"./fi.js": 236,
	"./fo": 237,
	"./fo.js": 237,
	"./fr": 238,
	"./fr-ca": 239,
	"./fr-ca.js": 239,
	"./fr-ch": 240,
	"./fr-ch.js": 240,
	"./fr.js": 238,
	"./fy": 241,
	"./fy.js": 241,
	"./gd": 242,
	"./gd.js": 242,
	"./gl": 243,
	"./gl.js": 243,
	"./gom-latn": 244,
	"./gom-latn.js": 244,
	"./gu": 245,
	"./gu.js": 245,
	"./he": 246,
	"./he.js": 246,
	"./hi": 247,
	"./hi.js": 247,
	"./hr": 248,
	"./hr.js": 248,
	"./hu": 249,
	"./hu.js": 249,
	"./hy-am": 250,
	"./hy-am.js": 250,
	"./id": 251,
	"./id.js": 251,
	"./is": 252,
	"./is.js": 252,
	"./it": 253,
	"./it.js": 253,
	"./ja": 254,
	"./ja.js": 254,
	"./jv": 255,
	"./jv.js": 255,
	"./ka": 256,
	"./ka.js": 256,
	"./kk": 257,
	"./kk.js": 257,
	"./km": 258,
	"./km.js": 258,
	"./kn": 259,
	"./kn.js": 259,
	"./ko": 260,
	"./ko.js": 260,
	"./ky": 261,
	"./ky.js": 261,
	"./lb": 262,
	"./lb.js": 262,
	"./lo": 263,
	"./lo.js": 263,
	"./lt": 264,
	"./lt.js": 264,
	"./lv": 265,
	"./lv.js": 265,
	"./me": 266,
	"./me.js": 266,
	"./mi": 267,
	"./mi.js": 267,
	"./mk": 268,
	"./mk.js": 268,
	"./ml": 269,
	"./ml.js": 269,
	"./mn": 270,
	"./mn.js": 270,
	"./mr": 271,
	"./mr.js": 271,
	"./ms": 272,
	"./ms-my": 273,
	"./ms-my.js": 273,
	"./ms.js": 272,
	"./mt": 274,
	"./mt.js": 274,
	"./my": 275,
	"./my.js": 275,
	"./nb": 276,
	"./nb.js": 276,
	"./ne": 277,
	"./ne.js": 277,
	"./nl": 278,
	"./nl-be": 279,
	"./nl-be.js": 279,
	"./nl.js": 278,
	"./nn": 280,
	"./nn.js": 280,
	"./pa-in": 281,
	"./pa-in.js": 281,
	"./pl": 282,
	"./pl.js": 282,
	"./pt": 283,
	"./pt-br": 284,
	"./pt-br.js": 284,
	"./pt.js": 283,
	"./ro": 285,
	"./ro.js": 285,
	"./ru": 286,
	"./ru.js": 286,
	"./sd": 287,
	"./sd.js": 287,
	"./se": 288,
	"./se.js": 288,
	"./si": 289,
	"./si.js": 289,
	"./sk": 290,
	"./sk.js": 290,
	"./sl": 291,
	"./sl.js": 291,
	"./sq": 292,
	"./sq.js": 292,
	"./sr": 293,
	"./sr-cyrl": 294,
	"./sr-cyrl.js": 294,
	"./sr.js": 293,
	"./ss": 295,
	"./ss.js": 295,
	"./sv": 296,
	"./sv.js": 296,
	"./sw": 297,
	"./sw.js": 297,
	"./ta": 298,
	"./ta.js": 298,
	"./te": 299,
	"./te.js": 299,
	"./tet": 300,
	"./tet.js": 300,
	"./tg": 301,
	"./tg.js": 301,
	"./th": 302,
	"./th.js": 302,
	"./tl-ph": 303,
	"./tl-ph.js": 303,
	"./tlh": 304,
	"./tlh.js": 304,
	"./tr": 305,
	"./tr.js": 305,
	"./tzl": 306,
	"./tzl.js": 306,
	"./tzm": 307,
	"./tzm-latn": 308,
	"./tzm-latn.js": 308,
	"./tzm.js": 307,
	"./ug-cn": 309,
	"./ug-cn.js": 309,
	"./uk": 310,
	"./uk.js": 310,
	"./ur": 311,
	"./ur.js": 311,
	"./uz": 312,
	"./uz-latn": 313,
	"./uz-latn.js": 313,
	"./uz.js": 312,
	"./vi": 314,
	"./vi.js": 314,
	"./x-pseudo": 315,
	"./x-pseudo.js": 315,
	"./yo": 316,
	"./yo.js": 316,
	"./zh-cn": 317,
	"./zh-cn.js": 317,
	"./zh-hk": 318,
	"./zh-hk.js": 318,
	"./zh-tw": 319,
	"./zh-tw.js": 319
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

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
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


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.title = this.navParams.get('title');
        var id = this.navParams.get('id');
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
            ];
        }
        else if (id == 1) {
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
            ];
        }
        else {
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
            ];
        }
    }
    ListPage.prototype.numberWithCommas = function (x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/list/list.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="header-title">\n            {{title}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <div *ngFor="let item of list" class="item-row">\n        <div>\n            <img src="{{item.image}}" alt="" class="img-cover">\n        </div>\n        <div class="item-desp">\n            <div class="item-title">{{item.title}}</div>\n            <div>by {{item.author}}</div>\n            <div class="item-rate-row">\n                <div class="rate-star-row">\n                    <div class="rate-color-group">\n                        <div class="rate-color" [ngStyle]="{\'width\': item.star * 100 / 5 + \'%\'}">\n                        </div>\n                        <div class="rate-color1" [ngStyle]="{\'width\': (5 - item.star) * 100 / 5 + \'%\'}">\n                        </div>\n                    </div>\n                    <img src="../../assets/imgs/star2.png" class="rate-background">\n                </div>\n                <div>{{item.star}} • </div>\n                <div>{{item.noRate}} ratings • </div>\n                <div>{{item.publishYear}}</div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/list/list.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], ListPage);
    return ListPage;
    var _a, _b;
}());

//# sourceMappingURL=list.js.map

/***/ })

},[322]);
//# sourceMappingURL=main.js.map