import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BdServiceService } from '../bd-service.service';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { Observable } from 'rxjs';



interface Publicacion {
  caption : string,
  comentario: string,
  id: string,
  imagen: string,
  usuario: string
}
@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  itemsPublicaciones: Observable<any[]>;

  itemRef: AngularFireObject<any>;
  item: Observable<any>;

  constructor(
    private http: HttpClient, 
    private bd: BdServiceService,
    private fbFirebase: AngularFireDatabase
    ) { 

      this.itemRef = fbFirebase.object('publicaciones');
    this.item = this.itemRef.valueChanges(); 
      this.itemsPublicaciones = this.fbFirebase.list('publicaciones').valueChanges()
     
  }
    

  ngOnInit(): void {
    
   
  }

  publicaciones : any = [];

  activo = 'grid';

  toggleActivo(activo: string):void {
    this.activo = activo;
  }
  
}

