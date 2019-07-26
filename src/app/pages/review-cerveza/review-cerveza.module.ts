import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReviewCervezaPage } from './review-cerveza.page';

const routes: Routes = [
  {
    path: '',
    component: ReviewCervezaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReviewCervezaPage]
})
export class ReviewCervezaPageModule {}
