import { Component } from '@angular/core';

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ionic-angular-1FM045';
  total= 90;

  esCierto = true;

  imagenes = [
    "assets/perrillo.jpeg",
    "assets/perrillo.jpeg",
    "assets/perrillo.jpeg",
    "assets/perrillo.jpeg",
    "assets/perrillo.jpeg"
  ];

  perfil = false;

  togglePerfil(): void {
    this.perfil = !this.perfil;
  }


  
}
