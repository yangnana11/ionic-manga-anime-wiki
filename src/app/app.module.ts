import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular'
import { MyApp } from './app.component'

import { HomePage } from '../pages/home/home'
import { TabsPage } from '../pages/tabs/tabs'

import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { ShelfPage } from '../pages/shelf/shelf'
import { CollectionPage } from '../pages/collection/collection'
import { SearchPage } from '../pages/search/search'
import { ListPage } from '../pages/list/list'

@NgModule({
    declarations: [
        MyApp,
        CollectionPage,
        SearchPage,
        HomePage,
        TabsPage,
        ShelfPage,
        ListPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        CollectionPage,
        SearchPage,
        HomePage,
        TabsPage,
        ShelfPage,
        ListPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
