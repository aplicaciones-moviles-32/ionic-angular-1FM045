import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BdServiceService } from '../bd-service.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private bd : BdServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {
    console.log("Submit");
    this.subir()
  }

  nuevoPost : any = {
    "caption": "", 
    "id": "", 
    "imagen": "/imagenes/Ruffles.png", 
    "usuario": "@ruffles"
  }

  subir() {
    this.bd.postPublicacion(this.nuevoPost).subscribe();
  }

}
