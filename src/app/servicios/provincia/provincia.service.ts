import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Respuesta } from 'src/app/administrador/models/respuesta';
import { environment } from 'src/environments/environment';
import { Provincia } from 'src/app/administrador/models/provincia.model';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  private url = environment.URL;

  constructor(
    private http: HttpClient
  ) { }

  getProvincias() {
    return this.http.get<Respuesta>(this.url + 'provincia');
  }
}
