import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { SalvarItem } from "src/app/models/salvarItem";
import { ApiGithubService } from "../../service/api-github.service";
import { ModalhistoricoPage } from "../modalhistorico/modalhistorico.page";

@Component({
  selector: "app-page-crud",
  templateUrl: "./page-crud.page.html",
  styleUrls: ["./page-crud.page.scss"],
})
export class PageCrudPage implements OnInit {
  public salvarItens: Array<SalvarItem> = [];

  constructor(
    public salvarService: ApiGithubService,
    public modal: ModalController
  ) {}

  async ngOnInit(): Promise<void> {
    this.getCovidForm();
  }

  async abrirModalCovid() {
    const modal = await this.modal.create({
      component: ModalhistoricoPage,
    });
    modal.onDidDismiss().then(async () => {
      await this.getCovidForm();
    });
    return await modal.present();
  }

  async editarDadosCovidVindoDaModal(id: number): Promise<void> {
    const modal = await this.modal.create({
      component: ModalhistoricoPage,
      componentProps: {
        id,
      },
    });
    modal.onDidDismiss().then(async () => {
      await this.getCovidForm();
    });
    return await modal.present();
  }

  async delete(key) {
      await this.salvarService.delete(key);
      await this.getCovidForm();
  }

  public async getCovidForm() : Promise<void>{
    setTimeout(async () => {
      console.log(this.salvarItens, "aqui teste");
      this.salvarItens = await this.salvarService.getListarTodos();
      console.log(this.salvarItens, "vamos chegar aqui ");
    }, 2000);
  }


}
