import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { InicioPageAdministradorComponent } from './pages/inicio-page-administrador/inicio-page-administrador.component';
import { BaseComponent } from './base/base.component';
import { TemplateComponent } from './components/template/template.component';
import { MusicComponent } from './pages/music/music.component';
import { AlbumComponent } from './pages/album/album.component';


@NgModule({
  declarations: [

    TemplateComponent,
    MusicComponent,
    AlbumComponent
  ],
  imports: [
    CommonModule,
    AdministradorRoutingModule
  ]
})
export class AdministradorModule { }
