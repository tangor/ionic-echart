import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import { Ng2Echarts } from 'ng2-echarts';
import { EchartsNg2Module } from 'echarts-ng2';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { BarPageModule } from '../pages/bar/bar.module'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { BarBasicPage } from '../pages/bar/basic/basic'

@NgModule({
  declarations: [
    MyApp,
    // Ng2Echarts,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    // BarPageModule,
    // BarBasicPage
  ],
  imports: [
    BrowserModule,
    EchartsNg2Module,
    BarPageModule,

    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
