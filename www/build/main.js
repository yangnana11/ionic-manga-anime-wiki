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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(197);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="My Collection" tabIcon="book"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Search" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Scan" tabIcon="barcode"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="More" tabIcon="menu"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/tabs/tabs.html"*/
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
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


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 196:
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

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shelf_shelf__ = __webpack_require__(198);
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
            selector: 'page-home',template:/*ion-inline-start:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/home/home.html"*/'<ion-header>\n    <ion-toolbar color="#F4F1EA">\n        <ion-searchbar placeholder="Search by title, author or tag"></ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngFor="let friend of friends">\n\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="{{friend.ava}}">\n            </ion-avatar>\n            <h2 text-wrap><span class="focus-label">{{friend.name}}</span> gave {{friend.item.star}} stars to <span\n                    class="focus-label">{{friend.item.title}}</span>\n                by <span class="focus-label">{{friend.item.author}}</span></h2>\n            <p class="desp-label">{{friend.item.timeOfRate}}</p>\n        </ion-item>\n\n        <ion-item>\n            <ion-thumbnail item-start>\n                <img src="{{friend.item.image}}">\n            </ion-thumbnail>\n            <h2>{{friend.item.title}}</h2>\n            <p class="desp-label">by {{friend.item.author}} • {{friend.item.publishYear}}</p>\n            <button *ngIf="(friend.item.myConnection | json) == \'{}\'" class="shelf-button">\n                Add to checklist\n                <button class="shelf-arrow" (click)="showShelf({charNum: 0})">\n                    <ion-icon name="arrow-down"></ion-icon>\n                </button>\n            </button>\n            <button *ngIf="(friend.item.myConnection | json) != \'{}\'" class="shelf-button-added">\n                My manga\n                <button class="shelf-arrow" (click)="showShelf({charNum: 0})">\n                    <ion-icon name="arrow-down"></ion-icon>\n                </button>\n            </button>\n            <p class="rating">Rate this manga:\n                <button (click)="openRateMenu()">\n                    <ng-template\n                            *ngIf="1<=friend.item.star;then rated; else notRate">\n                    </ng-template>\n                    <ng-template\n                            *ngIf="2<=friend.item.star;then rated; else notRate">\n                    </ng-template>\n                    <ng-template\n                            *ngIf="3<=friend.item.star;then rated; else notRate">\n                    </ng-template>\n                    <ng-template\n                            *ngIf="4<=friend.item.star;then rated; else notRate">\n                    </ng-template>\n                    <ng-template\n                            *ngIf="5<=friend.item.star;then rated; else notRate">\n                    </ng-template>\n                    <ng-template #rated>\n                        <ion-icon name="star"></ion-icon>\n                    </ng-template>\n\n                    <ng-template #notRate>\n                        <ion-icon name="star-outline"></ion-icon>\n                    </ng-template>\n            </button>\n            </p>\n        </ion-item>\n\n        <ion-row>\n            <ion-col>\n                <button ion-button icon-start clear small class="social">\n                    <ion-icon name="thumbs-up"></ion-icon>\n                    <div>{{friend.item.noLike}} Likes</div>\n                </button>\n            </ion-col>\n            <ion-col>\n                <button ion-button icon-start clear small class="social">\n                    <ion-icon name="text"></ion-icon>\n                    <div>{{friend.item.noComment}} Comments</div>\n                </button>\n            </ion-col>\n        </ion-row>\n\n    </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/nana/Documents/own_studying/ionic/ionic-manga-anime-wiki/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 198:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_about_about__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_shelf_shelf__ = __webpack_require__(198);
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
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_shelf_shelf__["a" /* ShelfPage */]
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
                __WEBPACK_IMPORTED_MODULE_4__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_shelf_shelf__["a" /* ShelfPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
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
	"./af": 199,
	"./af.js": 199,
	"./ar": 200,
	"./ar-dz": 201,
	"./ar-dz.js": 201,
	"./ar-kw": 202,
	"./ar-kw.js": 202,
	"./ar-ly": 203,
	"./ar-ly.js": 203,
	"./ar-ma": 204,
	"./ar-ma.js": 204,
	"./ar-sa": 205,
	"./ar-sa.js": 205,
	"./ar-tn": 206,
	"./ar-tn.js": 206,
	"./ar.js": 200,
	"./az": 207,
	"./az.js": 207,
	"./be": 208,
	"./be.js": 208,
	"./bg": 209,
	"./bg.js": 209,
	"./bm": 210,
	"./bm.js": 210,
	"./bn": 211,
	"./bn.js": 211,
	"./bo": 212,
	"./bo.js": 212,
	"./br": 213,
	"./br.js": 213,
	"./bs": 214,
	"./bs.js": 214,
	"./ca": 215,
	"./ca.js": 215,
	"./cs": 216,
	"./cs.js": 216,
	"./cv": 217,
	"./cv.js": 217,
	"./cy": 218,
	"./cy.js": 218,
	"./da": 219,
	"./da.js": 219,
	"./de": 220,
	"./de-at": 221,
	"./de-at.js": 221,
	"./de-ch": 222,
	"./de-ch.js": 222,
	"./de.js": 220,
	"./dv": 223,
	"./dv.js": 223,
	"./el": 224,
	"./el.js": 224,
	"./en-au": 225,
	"./en-au.js": 225,
	"./en-ca": 226,
	"./en-ca.js": 226,
	"./en-gb": 227,
	"./en-gb.js": 227,
	"./en-ie": 228,
	"./en-ie.js": 228,
	"./en-il": 229,
	"./en-il.js": 229,
	"./en-nz": 230,
	"./en-nz.js": 230,
	"./eo": 231,
	"./eo.js": 231,
	"./es": 232,
	"./es-do": 233,
	"./es-do.js": 233,
	"./es-us": 234,
	"./es-us.js": 234,
	"./es.js": 232,
	"./et": 235,
	"./et.js": 235,
	"./eu": 236,
	"./eu.js": 236,
	"./fa": 237,
	"./fa.js": 237,
	"./fi": 238,
	"./fi.js": 238,
	"./fo": 239,
	"./fo.js": 239,
	"./fr": 240,
	"./fr-ca": 241,
	"./fr-ca.js": 241,
	"./fr-ch": 242,
	"./fr-ch.js": 242,
	"./fr.js": 240,
	"./fy": 243,
	"./fy.js": 243,
	"./gd": 244,
	"./gd.js": 244,
	"./gl": 245,
	"./gl.js": 245,
	"./gom-latn": 246,
	"./gom-latn.js": 246,
	"./gu": 247,
	"./gu.js": 247,
	"./he": 248,
	"./he.js": 248,
	"./hi": 249,
	"./hi.js": 249,
	"./hr": 250,
	"./hr.js": 250,
	"./hu": 251,
	"./hu.js": 251,
	"./hy-am": 252,
	"./hy-am.js": 252,
	"./id": 253,
	"./id.js": 253,
	"./is": 254,
	"./is.js": 254,
	"./it": 255,
	"./it.js": 255,
	"./ja": 256,
	"./ja.js": 256,
	"./jv": 257,
	"./jv.js": 257,
	"./ka": 258,
	"./ka.js": 258,
	"./kk": 259,
	"./kk.js": 259,
	"./km": 260,
	"./km.js": 260,
	"./kn": 261,
	"./kn.js": 261,
	"./ko": 262,
	"./ko.js": 262,
	"./ky": 263,
	"./ky.js": 263,
	"./lb": 264,
	"./lb.js": 264,
	"./lo": 265,
	"./lo.js": 265,
	"./lt": 266,
	"./lt.js": 266,
	"./lv": 267,
	"./lv.js": 267,
	"./me": 268,
	"./me.js": 268,
	"./mi": 269,
	"./mi.js": 269,
	"./mk": 270,
	"./mk.js": 270,
	"./ml": 271,
	"./ml.js": 271,
	"./mn": 272,
	"./mn.js": 272,
	"./mr": 273,
	"./mr.js": 273,
	"./ms": 274,
	"./ms-my": 275,
	"./ms-my.js": 275,
	"./ms.js": 274,
	"./mt": 276,
	"./mt.js": 276,
	"./my": 277,
	"./my.js": 277,
	"./nb": 278,
	"./nb.js": 278,
	"./ne": 279,
	"./ne.js": 279,
	"./nl": 280,
	"./nl-be": 281,
	"./nl-be.js": 281,
	"./nl.js": 280,
	"./nn": 282,
	"./nn.js": 282,
	"./pa-in": 283,
	"./pa-in.js": 283,
	"./pl": 284,
	"./pl.js": 284,
	"./pt": 285,
	"./pt-br": 286,
	"./pt-br.js": 286,
	"./pt.js": 285,
	"./ro": 287,
	"./ro.js": 287,
	"./ru": 288,
	"./ru.js": 288,
	"./sd": 289,
	"./sd.js": 289,
	"./se": 290,
	"./se.js": 290,
	"./si": 291,
	"./si.js": 291,
	"./sk": 292,
	"./sk.js": 292,
	"./sl": 293,
	"./sl.js": 293,
	"./sq": 294,
	"./sq.js": 294,
	"./sr": 295,
	"./sr-cyrl": 296,
	"./sr-cyrl.js": 296,
	"./sr.js": 295,
	"./ss": 297,
	"./ss.js": 297,
	"./sv": 298,
	"./sv.js": 298,
	"./sw": 299,
	"./sw.js": 299,
	"./ta": 300,
	"./ta.js": 300,
	"./te": 301,
	"./te.js": 301,
	"./tet": 302,
	"./tet.js": 302,
	"./tg": 303,
	"./tg.js": 303,
	"./th": 304,
	"./th.js": 304,
	"./tl-ph": 305,
	"./tl-ph.js": 305,
	"./tlh": 306,
	"./tlh.js": 306,
	"./tr": 307,
	"./tr.js": 307,
	"./tzl": 308,
	"./tzl.js": 308,
	"./tzm": 309,
	"./tzm-latn": 310,
	"./tzm-latn.js": 310,
	"./tzm.js": 309,
	"./ug-cn": 311,
	"./ug-cn.js": 311,
	"./uk": 312,
	"./uk.js": 312,
	"./ur": 313,
	"./ur.js": 313,
	"./uz": 314,
	"./uz-latn": 315,
	"./uz-latn.js": 315,
	"./uz.js": 314,
	"./vi": 316,
	"./vi.js": 316,
	"./x-pseudo": 317,
	"./x-pseudo.js": 317,
	"./yo": 318,
	"./yo.js": 318,
	"./zh-cn": 319,
	"./zh-cn.js": 319,
	"./zh-hk": 320,
	"./zh-hk.js": 320,
	"./zh-tw": 321,
	"./zh-tw.js": 321
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