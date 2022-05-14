import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseDatabaseService {

  //items: Observable<any[]>;
  constructor(private fbdb: AngularFireDatabase) {
    //this.items = database.list('publicaciones').valueChanges();
    //console.log(this.items);
   }
}
