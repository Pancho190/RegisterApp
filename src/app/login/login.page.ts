import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login:any= {
    Usuario: '',
    Password: ''
  };

  field: string=""
  router: any;

  constructor(public toastController: ToastController,)

  {}ngOnInit() {
  }


  ingresar(){
    if(this.validateModel(this.login)){
      if (this.validateLongUsuario(this.login.Usuario)){
        if(this.validateLongPass(this.login.Password)){
          this.presentToast("Bienvenido "+this.login.Usuario);
          let navigationExtras:NavigationExtras={
            state: {user:this.login.Usuario} 
          }
          this.router.navigate(['home'],navigationExtras);
        }else{
          this.presentToast("La contraseña debe ser de largo 4 y solo numerica");
          this.login.Password="";
        }
      }else{
        this.presentToast("El largo del usuario debe ser entre 3 y 8 caracteres");
        this.login.Usuario="";
      }
    }
    else{
      this.presentToast("Falta: "+this.field);
    }
  }
  /**
   * validateModel sirve para validar que se ingrese algo en los
   * campos del html mediante su modelo
   */
  validateModel(model:any){
    // Recorro todas las entradas que me entrega Object entries y obtengo su clave, valor
    for (var [key, value] of Object.entries(model)) {
      // Si un valor es "" se retornara false y se avisara de lo faltante
      if (value=="") {
        // Se asigna el campo faltante
        this.field=key;
        // Se retorna false
        return false;
      }
    }
    return true;
  }

  validateLongUsuario(dato:String){
    if(dato.length>=3 && dato.length<=8){
      return true
    }
    return false;
  }
  validateLongPass(dato:String){
    if(dato.length==4 && Number.isInteger(Number(dato))){
      return true;
    }
    return false;
  }
  /**
   * Muestra un toast al usuario
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */
  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }
}
