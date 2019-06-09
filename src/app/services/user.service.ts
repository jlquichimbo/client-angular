import { Global } from './global';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  public usuarioSeleccionado: User;
  public usuarios: User[];
  public identidad;
  public token;

  constructor(public http: HttpClient) {
    this.usuarioSeleccionado = new User();
    this.url = Global.url;
  }

  // Login
  iniciarSesion(usuario, token = null): Observable<any> {
    if (token != null) {
      usuario.token = token;
    }

    const params = JSON.stringify(usuario);
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.url + 'login', params, {headers});
  }

  // Que usuario se ha logueado
  obtenerIdentidad() {
    const identidad = JSON.parse(localStorage.getItem('identidad'));

    if (identidad !== 'undefined') {
      this.identidad = identidad;
    } else {
      this.identidad = null;
    }

    return this.identidad;
  }

  obtenerToken() {
    // Guardando variable en memoria de navegador
    const token = localStorage.getItem('token');

    if (token !== 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }

    return this.token;
  }
}
