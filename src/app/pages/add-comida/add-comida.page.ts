import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { resenia } from '../../types/resenia'
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-comida',
  templateUrl: './add-comida.page.html',
  styleUrls: ['./add-comida.page.scss'],
})
export class AddComidaPage implements OnInit {

  
newComida: resenia = {
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
    console.log(this.newComida);
    this.db.addComida(this.newComida);
    this.location.back();
    
  }

}
