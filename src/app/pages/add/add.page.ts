import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { resenia } from '../../types/resenia'
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

newPS: resenia = {
  puntuacion: undefined,
  categoria: undefined,
  nombre: undefined,
  resenia: undefined,
  imagen: undefined,
  fecha: undefined

}


  imagen=false;
  constructor(private db: DatabaseService, private location: Location) { }

  ngOnInit() {
  
  }

  add(){
    console.log(this.newPS);
    this.db.addPS(this.newPS);
    this.location.back();
    
  }

}
