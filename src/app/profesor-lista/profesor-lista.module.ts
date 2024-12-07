import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ProfesorListaPageRoutingModule } from './profesor-lista-routing.module';
import { ProfesorListaPage } from './profesor-lista.page';  // Asegúrate de que esté importado

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfesorListaPageRoutingModule
  ],
  declarations: [ProfesorListaPage]  // Asegúrate de que esté declarado aquí
})
export class ProfesorListaPageModule {}
