import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta } from 'src/app/administrador/models/respuesta';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CancionService {
  private url = environment.URL;

  constructor(
    private http: HttpClient
  ) { }

  registroSong( data:any)
  {
    return this.http.post<Respuesta>(this.url + 'musica/create', data);
  }

  listarSong( usuario_id:any, estado:any)
  {
    const link=this.url + 'musica/listar/'+ usuario_id +'/'+estado;
    return this.http.get<Respuesta>(link);
  }
}
