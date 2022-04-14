import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  //aqui se va a navegar en modulos
  {path: '',redirectTo:'auth',pathMatch:'full'},
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {path:'cliente', loadChildren: () => import('./cliente/cliente.module').then( m => m.ClienteModule)},
  {path: 'administrador', loadChildren: () => import('./administrador/administrador.module').then( m=> m.AdministradorModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
