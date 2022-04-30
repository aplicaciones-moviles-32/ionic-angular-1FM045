import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BdServiceService } from '../bd-service.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  constructor(private http: HttpClient, private bd: BdServiceService) { }

  ngOnInit(): void {
    this.bd.getPublicacionesUsuario().subscribe(res => {
      this.publicaciones = res;
      //console.log(res);
    })
  }

  publicaciones : any = [];

  activo = 'grid';

  toggleActivo(activo: string):void {
    this.activo = activo;
  }
  
}
