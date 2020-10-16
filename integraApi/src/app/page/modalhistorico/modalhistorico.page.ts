import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalhistorico',
  templateUrl: './modalhistorico.page.html',
  styleUrls: ['./modalhistorico.page.scss'],
})
export class ModalhistoricoPage implements OnInit {

  constructor(public modalFechar: ModalController) { }

  ngOnInit() {
  }

  fecharCard(): void {
    this.modalFechar.dismiss();
  } 
}
