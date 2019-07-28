import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Router, ActivatedRoute } from '@angular/router';
import { resenia } from 'src/app/types/resenia';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Location } from '@angular/common';

@Component({
  selector: 'app-review-comida',
  templateUrl: './review-comida.page.html',
  styleUrls: ['./review-comida.page.scss'],
})
export class ReviewComidaPage implements OnInit {
  comida: Observable<resenia>;
  constructor(private db: DatabaseService,
     private router: Router,
      private route: ActivatedRoute,
      private afa: AngularFireAuth,
      private location: Location) { }

  // link = this.router.getCurrentNavigation()
  //id = this.route.snapshot.params.idReview;
  link = this.db.getCurrentUrl();
  

  ngOnInit() {
    //console.log(this.id);
    this.comida = this.db.getReview(this.link[3], this.link[4]);
    console.log(this.comida);
    //this.db.getReview(this.id).subscribe( item => console.log(item));
    
  }

  back(){
    this.location.back();

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
