import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageCrudPageRoutingModule } from './page-crud-routing.module';

import { PageCrudPage } from './page-crud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageCrudPageRoutingModule
  ],
  declarations: [PageCrudPage]
})
export class PageCrudPageModule {}
