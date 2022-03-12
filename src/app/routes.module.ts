import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { FeedComponent } from './feed/feed.component';
import { PerfilComponent } from './perfil/perfil.component';

const routes : Routes = [
  { path: 'perfil',  component: PerfilComponent },
  { path: 'feed', component: FeedComponent }
  
]

//, { path: '', redirectTo: '/perfil', pathMatch: 'full' },
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutesModule { }
