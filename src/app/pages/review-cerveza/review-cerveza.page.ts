import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Router, ActivatedRoute } from '@angular/router';
import { resenia } from 'src/app/types/resenia';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-review-cerveza',
  templateUrl: './review-cerveza.page.html',
  styleUrls: ['./review-cerveza.page.scss'],
})
export class ReviewCervezaPage implements OnInit {

  cerveza: Observable<resenia>;
  constructor(private db: DatabaseService,
     private router: Router,
      private route: ActivatedRoute,
      private afa: AngularFireAuth) { }

  // link = this.router.getCurrentNavigation()
  idCerveza = this.route.snapshot.params['cervezaid'];
  

  ngOnInit() {
    console.log(this.idCerveza);
    this.cerveza = this.db.getCerveza(this.idCerveza);
    console.log(this.cerveza);
    this.db.getCerveza(this.idCerveza).subscribe( item => console.log(item));
    
  }

  log() {
    this.afa.authState.subscribe(auth => {
      if (auth) {
        //this.router.navigateByUrl('/edit');
  
      } else {
        this.router.navigateByUrl('/login');
  
      }
      });
     }


}
