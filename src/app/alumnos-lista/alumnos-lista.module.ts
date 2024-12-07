import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosListaPageRoutingModule } from './alumnos-lista-routing.module';

import { AlumnosListaPage } from './alumnos-lista.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosListaPageRoutingModule
  ],
  declarations: [AlumnosListaPage]
})
export class AlumnosListaPageModule {}
