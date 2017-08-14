import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { BarPage } from './bar';
import { BarBasicPage } from './basic/basic'

@NgModule({
  declarations: [
    BarPage,
    BarBasicPage
  ],
  imports: [
    IonicPageModule.forChild(BarPage),
  ],
  entryComponents: [
    BarBasicPage
  ]
})
export class BarPageModule {}
