import {Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/services/database.service';
import { resenia } from 'src/app/types/resenia';




@Component({
  selector: 'app-resenias-comida',
  templateUrl: './resenias-comida.page.html',
  styleUrls: ['./resenias-comida.page.scss'],
})
export class ReseniasComidaPage implements OnInit {

  constructor(
    private router: Router,
    private afa: AngularFireAuth,
    private db: DatabaseService,
    private route: ActivatedRoute
) {}

foods: resenia[];
filtro: resenia[];

ID;
search = false;

add;

foodId = this.route.snapshot.params['nombre'];
ngOnInit() {

 this.db.getFood(this.foodId).subscribe(f =>{
   this.foods = f;
   this.filtro = f;
 })

}
busqueda(event){
  if(event.target.value){
    this.filtro = this.foods.filter(f => f.nombre.toLowerCase().includes(event.target.value));
  } else {
    this.filtro = this.foods;
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
