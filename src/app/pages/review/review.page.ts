import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Router, ActivatedRoute } from '@angular/router';
import { resenia } from 'src/app/types/resenia';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  PS: Observable<resenia>;
  constructor(private db: DatabaseService,
     private router: Router,
      private route: ActivatedRoute,
      private afa: AngularFireAuth) { }

  // link = this.router.getCurrentNavigation()
  idItem = this.route.snapshot.params.idReview;
  

  ngOnInit() {
    console.log(this.idItem);
    this.PS = this.db.getItem(this.idItem);
    console.log(this.PS);
    this.db.getItem(this.idItem).subscribe( item => console.log(item));
    
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
