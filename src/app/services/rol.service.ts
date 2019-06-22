import { Global } from './global';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';
import { Glob } from 'glob';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  public url: string;
  public rolSelected: Rol;
  public roles: Rol[];

  constructor(public http: HttpClient, userService: UserService) {
    this.url = Global.url;
    this.rolSelected = new Rol();
  }

  listarRoles(token): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);
    return this.http.get(this.url + 'rol', {headers: headers});
  }

  guardarRol(token, rol: Rol): Observable<any> {
    const params = JSON.stringify(rol);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this.http.post(this.url + 'rol', params, {headers});
  }

  actualizarRol(token, rol: Rol): Observable<any>{
    const params = JSON.stringify(rol);
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this.http.put(`${this.url}rol/${rol._id}`, params, {headers})
  }

  eliminarRol(token, idRol): Observable<any>{
    const headers = new HttpHeaders().set('Content-Type', 'application/json').set('token', token);

    return this.http.delete(`${this.url}rol/${idRol}`, {headers});
  }
}
