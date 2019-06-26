import { Acceso } from 'src/app/models/acceso';
import { AccesoService } from 'src/app/services/acceso.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css'],
  providers: [AccesoService, UserService]
})
export class AccesoComponent implements OnInit {
  // Variables
  public token;

  constructor(private accesoService: AccesoService, private userService: UserService) {
    this.token = this.userService.obtenerToken();
  }

  ngOnInit() {
    console.log('Componente accesos cargado');
    this.listarAccesos();
  }

  listarAccesos() {
    this.accesoService.listarAccesos(this.token).subscribe((res) => {
      console.log(res);
      this.accesoService.accesos = res.permisos as Acceso[];
    }, error => console.log(error as any));
  }

  guardarAcceso(form: NgForm) {
    this.accesoService.registrarAcceso(this.token, form.value).subscribe((res) => {
      this.listarAccesos();
      form.reset();
    }, error => console.log(error as any));
  }

}
