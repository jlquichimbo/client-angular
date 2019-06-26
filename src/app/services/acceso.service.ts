import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Acceso } from '../models/acceso';
import { Global } from './global';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  public url: string;
  public accesoSelected: Acceso;
  public accesos: Acceso[];

  constructor(public http: HttpClient) {
    this.url = Global.url;
    this.accesoSelected = new Acceso();
  }

  listarAccesos(token): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);
    return this.http.get(this.url + 'acceso', {headers});
  }

  registrarAcceso(token, acceso: Acceso){
    const params = JSON.stringify(acceso);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);
    return this.http.post(`${this.url}acceso`, params, {headers});
  }
}
