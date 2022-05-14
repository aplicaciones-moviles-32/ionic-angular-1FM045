import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Photo } from '@capacitor/camera';
import { BdServiceService } from '../bd-service.service';

import { PhotoService } from '../services/photo.service';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private bd : BdServiceService, 
    private fotoService: PhotoService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log("Submit");
    this.subir()
  }

  caption : string = "";

  nuevoPost : any = {
    "caption": "", 
    "id": "", 
    "imagen": "/imagenes/Ruffles.png", 
    "usuario": "@ruffles"
  }

  subir() {
    this.bd.postPublicacion(this.nuevoPost).subscribe();
  }

  foto() {
    this.fotoService.tomarFoto();
  }

}
