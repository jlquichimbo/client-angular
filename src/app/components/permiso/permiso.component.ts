import { UserService } from './../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RolService } from 'src/app/services/rol.service';
import { PermisoService } from 'src/app/services/permiso.service';
import { Component, OnInit } from '@angular/core';
import { Permiso } from 'src/app/models/permiso';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html',
  styleUrls: ['./permiso.component.css'],
  providers: [PermisoService, RolService, UserService]
})
export class PermisoComponent implements OnInit {
  public token;
  public estado: string;
  public opcionBoton: string;

// tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private permisoService: PermisoService, private userService: UserService, private rolService: RolService) {
    this.token = this.userService.obtenerToken();
    this.opcionBoton = 'Registrar';

  }

  ngOnInit() {
    console.log('Componente permisos cargado!');
    this.obtenerRoles();
    this.obtenerPermisos();

  }

  guardarPermiso(form: NgForm){
    if (form.value._id) {
      this.permisoService.actualizarPermiso(this.token, form.value).subscribe((res) => {
        console.log('Actualizando');
        this.opcionBoton = 'Registrar';
        this.obtenerPermisos();
        form.reset();
      }, error => console.log(<any>error))
    } else {
      console.log('Guardando');
      this.permisoService.guardarPermiso(this.token, form.value).subscribe((res) => {
        this.opcionBoton = 'Guardando';
        console.log(form.value);
        this.obtenerPermisos();
        form.reset();
      }
      , error => console.log(error as any));
    }
  }

  obtenerPermisos(){
    this.permisoService.listarPermisos(this.token).subscribe((res) => {
      console.log(res);
      this.permisoService.permisos = res.permisos as Permiso[]}, error => console.log(error as any));
  }

  obtenerRoles() {
    this.rolService.listarRoles(this.token).subscribe(res => this.rolService.roles = res.roles, error => console.log(<any>error));
  }

  editarPermiso(permiso: Permiso) {
    this.opcionBoton = 'Editar';
    this.permisoService.permisoSelected = permiso;
  }

  eliminarPermiso(idPermiso: string){
    if (confirm('Estas seguro de eliminar este Permiso_')) {
// tslint:disable-next-line: max-line-length
      this.permisoService.eliminarPermiso(this.token, idPermiso).subscribe(res => this.obtenerPermisos(),
      error => console.log(error as any));
    }
  }
}
