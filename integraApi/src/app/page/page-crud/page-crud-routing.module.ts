import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageCrudPage } from './page-crud.page';

const routes: Routes = [
  {
    path: '',
    component: PageCrudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageCrudPageRoutingModule {}
