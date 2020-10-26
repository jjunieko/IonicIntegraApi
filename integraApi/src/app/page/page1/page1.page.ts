import { Component, OnInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ApiService } from "../../service/api.service";
import { ResponseApi } from "../../models/response-api";
import { IonInfiniteScroll } from "@ionic/angular";


@Component({
  selector: "app-page1",
  templateUrl: "./page1.page.html",
  styleUrls: ["./page1.page.scss"],
})
export class Page1Page implements OnInit {
  public covid: Array<ResponseApi> = [];

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  static covid: any;

  constructor(
    public apiService: ApiService,
    public modalFechar: ModalController,
    public modal: ModalController
  ) {}

  async ngOnInit() {
    await this.getObjeto();
  }

  loadData(event) {
    setTimeout(
      () => {
        console.log("Done");
        event.target.complete();

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (Page1Page.covid.length === 1000) {
          event.target.disabled = true;
        } else {
          console.log("erro na página");
        }
      },
      3000,
      alert("final da pagina, volte ao topo")
    );
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  /*   async abrirModalCovid() {
    const modal = await this.modal.create({
      component: ModalhistoricoPage,
    });
    return await modal.present();
  } */

  getObjeto() {
    this.apiService.getObjetApi().subscribe((res) => {
      //console.log(res, "aqui");
      this.covid = res.data;
      console.log(res.data, "aqui....");
    });
  }

  search(event): void {
    let pesquisarEstado = event.target.value;
    if (!pesquisarEstado) {
      this.getObjeto();
      return;
    }
    this.covid = this.covid.filter((estado) => {
      return estado.state
        .toLocaleLowerCase()
        .includes(pesquisarEstado.toLowerCase());
    });
  }
  clear(): void {
    this.getObjeto();
  }

  //modelo de filter
  /* this.foodList = this.foodList.filter(currentFood => {
    if (currentFood.name && searchTerm) {
      return (currentFood.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
    }
  }); */
}
