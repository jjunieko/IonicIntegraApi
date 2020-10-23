import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { PageCrudPageRoutingModule } from "./page-crud-routing.module";

import { PageCrudPage } from "./page-crud.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageCrudPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [PageCrudPage],
})
export class PageCrudPageModule {}
