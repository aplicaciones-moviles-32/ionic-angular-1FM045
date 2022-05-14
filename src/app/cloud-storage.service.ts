import { Injectable } from '@angular/core';

import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})

//Servicio para acceso a Cloud Storage
export class CloudStorageService {

  constructor(private storage: AngularFireStorage) { }

  subirArchivo(event) {
    const file = event.target.files[0];
    const filePath = 'path-aqui';
    const task = this.storage.upload(filePath, file);
  }

}
