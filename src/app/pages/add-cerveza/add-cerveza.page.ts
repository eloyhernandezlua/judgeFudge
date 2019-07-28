import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { resenia } from '../../types/resenia'
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-cerveza',
  templateUrl: './add-cerveza.page.html',
  styleUrls: ['./add-cerveza.page.scss'],
})
export class AddCervezaPage implements OnInit {

  
newCerveza: resenia = {
  puntuacion: undefined,
  categoria: undefined,
  nombre: undefined,
  resenia: undefined,
  imagen: undefined,
  fecha: undefined

}


  imagen=false;
  constructor(private db: DatabaseService, private location: Location, private router: Router) { }

  ngOnInit() {
  
  }

  add(){
    console.log(this.newCerveza);
    this.db.addCerveza(this.newCerveza);
    this.router.navigateByUrl('/tabs/tab3');
    
  }

}
