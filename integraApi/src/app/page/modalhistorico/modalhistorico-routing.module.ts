import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalhistoricoPage } from './modalhistorico.page';

const routes: Routes = [
  {
    path: '',
    component: ModalhistoricoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalhistoricoPageRoutingModule {}
