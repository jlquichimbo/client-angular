import { UserService } from './services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, DoCheck } from '@angular/core';
import { Global } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent {
  public title = 'Taller angular ';
  public identidad: string;
  public url: string;
  public titulo: string;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.titulo = 'SACP-UTPL';
    this.url = Global.url;
  }

// tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.identidad = this.userService.obtenerIdentidad();
    console.log(this.identidad);
  }

// tslint:disable-next-line: use-lifecycle-interface
  ngDoCheck() {
    this.identidad = this.userService.obtenerIdentidad();
  }

  cerrarSesion() {
    localStorage.clear();
    console.log('Cerrando Sesion');
    this.identidad = null;
    this.router.navigate(['/login']);
  }
}
