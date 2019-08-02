import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { resenia } from '../types/resenia';
import { Observable } from 'rxjs';
import { DatabaseService } from '../services/database.service';



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

  peliculasSeries: resenia[];
  filtro: resenia[];

  ID;
    search = false;

  add;
  ngOnInit() {

    this.db.getPS().subscribe(p => {
      this.peliculasSeries = p;
      this.filtro = p;
    })

  }

  busqueda(event){
    if(event.target.value){
      this.filtro = this.peliculasSeries.filter(p => p.nombre.toLowerCase().includes(event.target.value));
    } else {
      this.filtro = this.peliculasSeries;
    }
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