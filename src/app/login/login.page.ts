import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  login = {
    Usuario: '',
    Password: ''
  };

  constructor() {}


  ingresar() {
    console.log('Usuario:', this.login.Usuario);
    console.log('Password:', this.login.Password);
  }
}
