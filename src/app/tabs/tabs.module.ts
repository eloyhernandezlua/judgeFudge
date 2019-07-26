import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ReviewPage } from '../pages/review/review.page';
import { ReviewCervezaPage } from '../pages/review-cerveza/review-cerveza.page';
import { ReviewComidaPage } from '../pages/review-comida/review-comida.page';
import { ReseniasComidaPage } from '../pages/resenias-comida/resenias-comida.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage, ReviewPage, ReviewCervezaPage, ReviewComidaPage, ReseniasComidaPage]
})
export class TabsPageModule {}
