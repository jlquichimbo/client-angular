import { UserService } from './../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RolService } from 'src/app/services/rol.service';
import { PermisoService } from 'src/app/services/permiso.service';
import { Component, OnInit } from '@angular/core';
import { Permiso } from 'src/app/models/permiso';


@Component({
  selector: 'app-permiso',
  templateUrl: './permiso.component.html',
  styleUrls: ['./permiso.component.css'],
  providers: [PermisoService, RolService, UserService]
})
export class PermisoComponent implements OnInit {
  public token;
  public estado: string;

// tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private router: Router, private permisoService: PermisoService, private userService: UserService) {
    this.token = this.userService.obtenerToken();
  }

  ngOnInit() {
    console.log('Componente permisos cargado!');
    this.obtenerPermisos();
  }

  obtenerPermisos(){
    this.permisoService.listarPermisos(this.token).subscribe((res) => {
      console.log(res);
      this.permisoService.permisos = res.permisos as Permiso[]}, error => console.log(error as any));
  }

}
