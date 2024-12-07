import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlumnosListaPage } from './alumnos-lista.page';

const routes: Routes = [
  {
    path: '',
    component: AlumnosListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlumnosListaPageRoutingModule {}
