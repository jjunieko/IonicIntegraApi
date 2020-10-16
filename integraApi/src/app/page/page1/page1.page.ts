import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ApiService } from "../../service/api.service";
import { ResponseApi } from "../../models/response-api"
import { ModalhistoricoPage } from '../modalhistorico/modalhistorico.page';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: "app-page1",
  templateUrl: "./page1.page.html",
  styleUrls: ["./page1.page.scss"],
})
export class Page1Page implements OnInit {
  public datas: ResponseApi;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  

  constructor(
    public apiService: ApiService,
    public modalFechar: ModalController,
    public modal: ModalController
  ) {}

 async ngOnInit() {
   await this.getObjeto();
  }


  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (Page1Page.data.length === 1000) {
        event.target.disabled = true;
      }
    }, 3000);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }



  async abrirModalCovid() {
    const modal = await this.modal.create({
      component: ModalhistoricoPage,
    });
    return await modal.present();
  }



 getObjeto() {
     this.apiService.getObjetApi().subscribe((res) => {
      //console.log(res, "aqui");
      this.datas =  res.data;
      console.log(res.data, "aqui....");
    });
  }

 /* fecharCard(): void {
    this.modalFechar.dismiss();
  }  */
}
