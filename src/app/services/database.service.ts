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
  comida = this.afs.collection('comida');
  cerveza = this.afs.collection('cerveza');
  

    addPS(resenia: resenia){
        return this.peliculasSeries.add(resenia);

    }

    addCerveza(resenia: resenia){
      return this.cerveza.add(resenia);
    }
    addComida(resenia: resenia){
      return this.afs.collection(`comida/${resenia.categoria}/resenias`).add(resenia);
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

    getCervezas(){
      return this.cerveza.snapshotChanges().pipe(
        map(change => change.map(doc => {
          const result = doc.payload.doc.data() as any;
          result.id = doc.payload.doc.id;
          return result;
        }))
      );
    }

    getFood(nombre){
      return this.afs.collection(`comida/${nombre}/resenias`).snapshotChanges().pipe(
        map(change => change.map(doc => {
          const result = doc.payload.doc.data() as any;
          result.id = doc.payload.doc.id;
          return result;
        }))
      );
    }

    getReview(nombre,id){
      return this.afs.collection(`comida/${nombre}/resenias`).doc(id).snapshotChanges().pipe(
        map(doc => {
          const result = doc.payload.data() as resenia;
          result.id = doc.payload.id;
          return result;
        })
      );
    }

    getComida(){
      return this.comida.snapshotChanges().pipe(
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

    getCerveza(id) {
      return this.cerveza.doc(id).snapshotChanges().pipe(
        map(doc => {
          const result = doc.payload.data() as resenia;
          result.id = doc.payload.id;
          return result;
        })
      );
    }


    getCurrentUrl() {

      return this.router.url.split('/');
    
      }

}
