import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { ResponseApi } from "../models/response-api";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  public url: string = environment.baseUrl;

  constructor(public httpclient: HttpClient) {}

  public getObjetApi(): Observable<ResponseApi> {
    return this.httpclient.get<ResponseApi>(this.url);
  }
}
/* 
    public async salvarDados() {
    this.update(this.url)
    
    await this.salvarDados();
  }

  public async salvar(dadosCovid): Promise<void> {
    let dadoCovid = await this.getObjetApi();

    await this.storage.set("dadoCovid", JSON.stringify(dadosCovid));
  } */
