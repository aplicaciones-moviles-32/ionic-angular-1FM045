import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class BdServiceService {

  constructor(private http: HttpClient) { }

  


  //GET
  getPublicaciones(): any {
    return this.http.get('https://alumnos-31-default-rtdb.firebaseio.com/')
  }

  getDatosUsuario(): any {
    return this.http.get('https://alumnos-31-default-rtdb.firebaseio.com/')
  }

  getPublicacionesUsuario(): any {
    return this.http.get('https://alumnos-31-default-rtdb.firebaseio.com/usuario/publicaciones.json')
  }

  getPublicacionDetalle(id: string): any {
    return this.http.get('https://alumnos-31-default-rtdb.firebaseio.com/usuario/publicaciones'+ id +'.json')
  }


  //POST
  postPublicacion(post: any) {
    return this.http.post('https://alumnos-31-default-rtdb.firebaseio.com/', post)
  }


  //DELETE
  deletePublicacion(id: number){
    return this.http.delete('https://alumnos-31-default-rtdb.firebaseio.com/publicaciones/'+ id.toString() + '.json')
  }

 

  //PUT
  updatePublicacion(id: number, nuevosDatos: any) {
    return this.http.put('https://alumnos-31-default-rtdb.firebaseio.com/publicaciones/'+ id.toString() +'.json', nuevosDatos)
  }

}
