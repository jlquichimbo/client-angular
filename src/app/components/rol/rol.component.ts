import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RolService } from 'src/app/services/rol.service';
import { error } from 'util';
import { Rol } from 'src/app/models/rol';


@Component({
  selector: 'app-rol',
  templateUrl: './rol.component.html',
  styleUrls: ['./rol.component.css'],
  providers: [RolService, UserService]
})

export class RolComponent implements OnInit {
  // Declaramos las variables
  public token;
  public opcionBoton: string;
  public estado: string;


  constructor(private userService: UserService, private rolService: RolService) {
    this.token = this.userService.obtenerToken();
    this.opcionBoton = 'Registrar';
  }

  ngOnInit() {
    console.log('Componente roles cargado.');
    this.listarRoles();
  }

  listarRoles() {
// tslint:disable-next-line: no-shadowed-variable
// tslint:disable-next-line: max-line-length
    this.rolService.listarRoles(this.token).subscribe((res) => {
      console.log(res);
      this.rolService.roles = res.roles as Rol[]}, error => console.log(error as any));
  }

  guardarRol(form: NgForm){
    if (form.value._id) {
      this.rolService.actualizarRol(this.token, form.value).subscribe((res) => {
        console.log('Actualizando');
        this.opcionBoton = 'Registrar';
        this.listarRoles();
        form.reset();
      }, error => console.log(<any>error))
    } else {
      console.log('Guardando');
      this.rolService.guardarRol(this.token, form.value).subscribe((res) => {
        this.opcionBoton = 'Guardando';
        console.log(form.value);
        this.listarRoles();
        form.reset();
      }
      , error => console.log(error as any));
    }
  }

  editarRol(rol: Rol) {
    this.opcionBoton = 'Editar';
    this.rolService.rolSelected = rol;

  }

  eliminarRol(idRol: string){
    if (confirm('Estas seguro de eliminar este Rol_')) {
      this.rolService.eliminarRol(this.token, idRol).subscribe(res => this.listarRoles(), error => console.log(error as any));
    }
  }
}
