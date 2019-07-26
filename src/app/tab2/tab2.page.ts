import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { comida } from '../types/comida';
import { Observable } from 'rxjs';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private router: Router,
    private db: DatabaseService,
) {}
    comidas: Observable<comida[]>

    ngOnInit(){
      this.comidas =this.db.getComida();

    }

}
