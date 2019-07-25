import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
<<<<<<< HEAD
import { ReviewPage } from '../pages/review/review.page';
=======
import {ReviewPage} from "../pages/review/review.page";
>>>>>>> 39b39fa5903b85930b0eeb33980bd47eb36a16e9

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage, ReviewPage]
})
export class TabsPageModule {}
