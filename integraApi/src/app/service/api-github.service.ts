import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import { SalvarItem } from "../models/salvarItem";

@Injectable({
  providedIn: "root",
})
export class ApiGithubService {
  constructor(public storage: Storage) {}

  public async getListarTodos(): Promise<SalvarItem[]> {
    //console.log("teste");
    let salvarItens = await this.storage.get("salvarItens");
    salvarItens = JSON.parse(salvarItens);
    console.log(salvarItens, "teste1111111");
  }

  public async salvarDadosCv(
    salvarService: SalvarItem,
    id: number
  ): Promise<void> {
    console.log(salvarService, id, "salvar Item");
    if (id || id === 0) {
      await this.update(salvarService, id);
      return;
    }
    await this.save(salvarService);
  }

  public async save(salvarService): Promise<void> {
    let salvarItens = await this.getListarTodos();
    if (!salvarItens) {
      salvarItens = [];
    }
    salvarItens.push(salvarService);
    await this.storage.set("salvarItens", JSON.stringify(salvarItens));
  }

  public async update(covidForm: SalvarItem, id: number): Promise<void> {
    //comidaForm={Ovos} | id={2}
    let salvarItem = await this.getListarTodos();
    salvarItem = await salvarItem.map((salvarlocalStorage, key) => {
      if (id == key) {
        return covidForm;
      }
      console.log(salvarItem, "salvaritem");
      return salvarlocalStorage;
    });

    await this.storage.set("salvarItens", JSON.stringify(salvarItem));
  }

  public async getCovidForm(key: number): Promise<SalvarItem> {
    let salvarItens = await this.getListarTodos();
    //return salvarItens;
    const CovidProcurada = salvarItens.find((salvarItem, idC) => {
      if (idC === key) {
        return salvarItem;
      }
    });
    return CovidProcurada;
  }
}
