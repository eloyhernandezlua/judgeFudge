import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReseniasComidaPage } from './resenias-comida.page';

const routes: Routes = [
  {
    path: '',
    component: ReseniasComidaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReseniasComidaPage]
})
export class ReseniasComidaPageModule {}
