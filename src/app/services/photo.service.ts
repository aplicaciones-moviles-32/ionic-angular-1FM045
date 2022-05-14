import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Capacitor } from '@capacitor/core';

import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

export interface Foto {
  filepath: string;
  webviewPath: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { 
   
  }

  public async tomarFoto() {
    //Abriendo camara
    const capturedPhoto = await Camera.getPhoto({
      quality : 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });
    };
    
}
