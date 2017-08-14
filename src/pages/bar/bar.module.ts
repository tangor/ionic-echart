import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { BarPage } from './bar';
import { BarBasicPage } from './basic/basic'

import { EchartsNg2Module } from 'echarts-ng2';

@NgModule({
  declarations: [
    BarPage,
    BarBasicPage
  ],
  imports: [
    EchartsNg2Module,
    IonicPageModule.forChild(BarPage),
  ],
  entryComponents: [
    BarBasicPage
  ]
})
export class BarPageModule {}
