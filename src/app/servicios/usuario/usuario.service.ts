import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta } from 'src/app/administrador/models/respuesta';
import { Usuario } from 'src/app/administrador/models/usuario.model';
import { environment } from 'src/environments/environment';
import { Genero } from 'src/app/administrador/models/genero.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url = environment.URL;

  constructor(
    private http: HttpClient
  ) { }

  getUsuarios() {
    return this.http.get<Usuario[]>(this.url + 'usuarios ');
  }

  login( data:any)
  {
    return this.http.post<Respuesta>(this.url + 'login', data);
  }

  registro( data:any)
  {
    return this.http.post<Respuesta>(this.url + 'register', data);
  }
}
