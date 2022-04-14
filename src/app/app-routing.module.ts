import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './administrador/pages/album/album.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistroComponent } from './auth/pages/registro/registro.component';


const routes: Routes = [

  //aqui se agrega las instancias

  { path: "", component: LoginComponent }, //login
  { path: "register", component: RegistroComponent }, //register
  //{ path: "ingreso", component: IngresoComponent }, //ingreso
  //{ path: "usuario", component: UsuarioComponent },//ingreso usuario
  //{ path: "artista", component: ArtistaComponent },//ingreso usuario}
  //{ path: "musica", component: MusicaComponent },//ingreso musica
  { path: "album", component: AlbumComponent },//ingreso album
  //{ path: "pantalla", component: PantallaComponent }//ingreso pantalla

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
