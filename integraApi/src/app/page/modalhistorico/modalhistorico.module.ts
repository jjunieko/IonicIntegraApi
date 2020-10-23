import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ModalhistoricoPageRoutingModule } from "./modalhistorico-routing.module";

import { ModalhistoricoPage } from "./modalhistorico.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalhistoricoPageRoutingModule,
  ],
  declarations: [ModalhistoricoPage],
})
export class ModalhistoricoPageModule {}
