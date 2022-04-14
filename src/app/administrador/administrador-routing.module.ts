import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { AlbumComponent } from './pages/album/album.component';
import { InicioPageAdministradorComponent } from './pages/inicio-page-administrador/inicio-page-administrador.component';
import { MusicComponent } from './pages/music/music.component';

const routes: Routes = [
  {path:'', component:BaseComponent,

  children:[
    {path:'', redirectTo:'inicio', pathMatch:'full'},
    {path:'inicio', component:InicioPageAdministradorComponent},
    {path:'music', component:MusicComponent},
    {path:'album',component:AlbumComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
