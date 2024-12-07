import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthserviceService } from '../services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: any = {
    Usuario: '',
    Password: '',
  };

  field: string = '';

  constructor(
    public toastController: ToastController,
    private authService: AuthserviceService,
    private router: Router
  ) {}

  ngOnInit() {}

  ingresar() {
    if (this.validateModel(this.login)) {
      this.authService
        .validateUser(this.login.Usuario, this.login.Password)
        .subscribe((user) => {
          if (user) {
            this.presentToast(`Bienvenido ${user.nombre}`);
            const navigationExtras: NavigationExtras = {
              state: { user: user },
            };
            if (user.tipo === 'alumno') {
              this.router.navigate(['alumnos-lista'], navigationExtras);
            } else if (user.tipo === 'profesor') {
              this.router.navigate(['profesor-lista'], navigationExtras);
            }
          } else {
            this.presentToast('Usuario o contraseña incorrectos');
            this.login.Password = '';
          }
        });
    } else {
      this.presentToast('Falta: ' + this.field);
    }
  }

  validateModel(model: any) {
    for (var [key, value] of Object.entries(model)) {
      if (value === '') {
        this.field = key;
        return false;
      }
    }
    return true;
  }

  async presentToast(message: string, duration?: number) {
    const toast = await this.toastController.create({
      message: message,
      duration: duration ? duration : 2000,
    });
    toast.present();
  }
}
