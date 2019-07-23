import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router:Router, private afa: AngularFireAuth) {}

  add;
log(){


  this.afa.authState.subscribe(auth => {
    if (auth){
      this.add = !this.add

    }else{
      this.router.navigateByUrl('/login');

    }
  })

 
    
  

}

logout(){
  this.add = false;
  this.afa.auth.signOut();
  console.log("si se salió");
}
}
