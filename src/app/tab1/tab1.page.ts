import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { resenia } from '../types/resenia';
import { observable, Observable } from 'rxjs';
import { DatabaseService } from '../services/database.service';
import { Tab1PageRoutingModule } from '../tab1/tab1.router.module';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(
      private router: Router,
      private afa: AngularFireAuth,
      private db: DatabaseService,
  ) {}

  peliculasSeries: Observable<resenia[]>;

  ID;


  add;
  ngOnInit() {

    this.peliculasSeries = this.db.getPS();

  }

  review() {
    this.ID = this.db.getPS();
    this.router.navigateByUrl(`/${this.ID}`);
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
