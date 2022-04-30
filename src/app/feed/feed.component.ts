import { Component, OnInit } from '@angular/core';

import { BdServiceService } from '../bd-service.service';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(
    private db: BdServiceService, 
    private popover: PopoverController) { }

  ngOnInit(): void {
   this.cargarFeed();
  }


  posts: any = [];

  isPopoverOpen: boolean = false;

  cargarFeed() {
    this.db.getPublicaciones().subscribe(res => {
      console.log(res);
      this.posts = res;
    })
  }
  
  //postIndex: number
  borrar(idPost : number)  {
    this.db.deletePublicacion(idPost).subscribe(res => {
      console.log(res);
      this.cargarFeed();
    })
    
  }

  editando: boolean = false;

  editar() {
    this.editando = !this.editando;
  }

  guardar(idPost: number, nuevoCaption: any) {
    this.db.updatePublicacion(idPost, nuevoCaption).subscribe(res => {
      console.log("Se actualizo la base de datos")
    });

    this.editar();
  }

}
