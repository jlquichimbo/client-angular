import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Permiso } from './../models/permiso';
import { Injectable } from '@angular/core';
import { RolService } from './rol.service';
import { Global } from './global';
import { Observable } from 'rxjs';
import { log } from 'util';
import { Glob } from 'glob';

@Injectable({
  providedIn: 'root'
})

export class PermisoService {
  public url: string;
  public permisoSelected: Permiso;
  public permisos: Permiso[];

  constructor(public http: HttpClient, rolService: RolService) {
    this.url = Global.url;
    this.permisoSelected = new Permiso();
  }

  listarPermisos(token): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'aplication/json').set('token', token);
    return this.http.get(this.url + 'permiso', {headers: headers});
  }

  guardarPermiso(token, permiso: Permiso): Observable<any> {
    console.log('Guardando permiso');
    const params = JSON.stringify(permiso);
    const headers = new HttpHeaders().set('Content-type', 'aplication/json').set('token', token);

    return this.http.post(this.url + 'permiso', params, {headers});
  }

  eliminarPermiso(token, idPermiso): Observable<any> {
    console.log('Borrando permiso');
    const headers = new HttpHeaders().set('Content-type', 'aplication/json').set('token', token);

    return this.http.delete(`${this.url}permiso/${idPermiso}`, {headers});
  }
}
