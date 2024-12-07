import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfesorListaPage } from './profesor-lista.page';

const routes: Routes = [
  {
    path: '',
    component: ProfesorListaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfesorListaPageRoutingModule {}
