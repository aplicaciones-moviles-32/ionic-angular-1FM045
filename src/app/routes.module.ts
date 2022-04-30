import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { FeedComponent } from './feed/feed.component';
import { MyGuard } from './guards/my-guard';
import { PerfilComponent } from './perfil/perfil.component';
import { PostComponent } from './post/post.component';

import { PublicacionComponent } from './publicacion/publicacion.component';


//myguard


const routes: Routes = [
  { path: 'feed', component: FeedComponent}, //
  { path: 'perfil', component: PerfilComponent }, 
  {path: 'publicacion/:id', component: PublicacionComponent},
  {path: 'post', component: PostComponent},
  { path: 'login', component: AuthComponent},
  {path: '**', component: FeedComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { 
  
}