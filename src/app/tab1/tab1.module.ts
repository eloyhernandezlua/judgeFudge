import { IonicModule } from '@ionic/angular';
import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { AngularFireAuth } from '@angular/fire/auth'
import { Tab1PageRoutingModule } from '../tab1/tab1.router.module'

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {

search = true;
add = false;  

constructor(private afa: AngularFireAuth, private router: Router){

}
/*
login(usuario, contrasenia){
  this.afauth.auth.signInWithEmailAndPassword(usuario,contrasenia);
}
*/


 

}
