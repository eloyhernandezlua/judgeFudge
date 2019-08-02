import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { resenia } from '../types/resenia';
import { Observable } from 'rxjs';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
    private router: Router,
    private afa: AngularFireAuth,
    private db: DatabaseService,
) {}

cervezas: Observable<resenia[]>;
search= false;
ID;


add;
ngOnInit() {

  this.cervezas = this.db.getCervezas();

}



log() {
this.afa.authState.subscribe(auth => {
  if (auth) {
    this.add = !this.add;

  } else {
    this.router.navigateByUrl('/login');

  }
  });
 }

  logout() {
    this.add = false;
    this.afa.auth.signOut();
    console.log('si se salió');
  }

  

}
