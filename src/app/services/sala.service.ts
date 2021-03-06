import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sala } from '../models/sala';
import { UserService } from './user.service';
import { Global } from './global';

@Injectable({
  providedIn: 'root'
})

export class SalaService {
  public url: string;
  public salaSelected: Sala;
  public salas: Sala[];

  constructor(public http: HttpClient) {
    this.salaSelected = new Sala();
    this.url = Global.url;
  }

  listarSalas(token): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'aplication/json').set('token', token);
    return this.http.get(`${this.url}sala`, {headers: headers});
  }

  guardarSala(token, sala: Sala): Observable<any> {
    const params = JSON.stringify(sala);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this.http.post(this.url + 'sala', params, {headers});
  }

  actualizarSala(token, sala: Sala): Observable<any> {
    const params = JSON.stringify(sala);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this.http.put(`${this.url}sala/${sala._id}`, params, {headers});
  }

  eliminarSala(token, idSala): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this.http.delete(`${this.url}sala/${idSala}`, {headers});
  }
}
