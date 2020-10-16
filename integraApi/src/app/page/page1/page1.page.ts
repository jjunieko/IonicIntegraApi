import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ApiService } from "../../service/api.service";
import { ResponseApi } from "../../models/response-api"

@Component({
  selector: "app-page1",
  templateUrl: "./page1.page.html",
  styleUrls: ["./page1.page.scss"],
})
export class Page1Page implements OnInit {
  public datas: ResponseApi;
  

  constructor(
    public apiService: ApiService,
    public modalFechar: ModalController
  ) {}

 async ngOnInit() {
   await this.getObjeto();
  }


 getObjeto() {
     this.apiService.getObjetApi().subscribe((res) => {
      //console.log(res, "aqui");
      this.datas =  res.data;
      console.log(res.data, "aqui....");
    });
  }

 /*  fecharCard(): void {
    this.modalFechar.dismiss();
  } */
}
