import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    MenubarModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  items: any;

  ngOnInit() {
    this.items = [
      {
        label: 'Bienvenida',
        icon: 'pi pi-home',
        routerLink: '/bienvenida'
      },
      {
        label: 'Login',
        icon: 'pi pi-user',
        routerLink: '/login'
      },
      {
        label: 'Registro',
        icon: 'pi pi-user',
        routerLink: '/registro'
      },
      {
        label: 'Sobre mi',
        icon: 'pi pi-star',
        routerLink: '/sobre-mi'
      }
    ];
  }
}
