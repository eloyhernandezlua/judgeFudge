import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import { Router } from '@angular/router';
import { resenia } from '../types/resenia'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private afs: AngularFirestore,
    private router: Router
  ) { }

  peliculasSeries = this.afs.collection('peliculasSeries');

    addPS(resenia: resenia){
        return this.peliculasSeries.add(resenia);

    }

    getPS(){
        return this.peliculasSeries.snapshotChanges().pipe(
            map(change => change.map(doc => {
              const result = doc.payload.doc.data() as any;
              result.id = doc.payload.doc.id;
              return result;
            }))
          );
    }

    getItem(id) {
      return this.peliculasSeries.doc(id).snapshotChanges().pipe(
        map(doc => {
          const result = doc.payload.data() as resenia;
          result.id = doc.payload.id;
          return result;
        })
      );
    }

}
