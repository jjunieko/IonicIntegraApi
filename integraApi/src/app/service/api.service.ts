import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from 'rxjs';
import { ResponseApi } from '../models/response-api';
/* import { Storage} from '@ionic/storage' */


@Injectable({
  providedIn: "root",
})
export class ApiService {
  public url: string = environment.baseUrl;
  constructor(public httpclient: HttpClient) {}

   public getObjetApi():Observable<ResponseApi> {
    return  this.httpclient.get<ResponseApi>(this.url);
  }
/* 
  public async update(){
    let atualizar = await this.getObjetApi();
    atualizar = atualizar.map((localStorage, key)=>{
      if(id == key) {
        return atualizar;
      }
      return localStorage;
    })
  } */

/*   public async remover(index: number) {
    let removerDado = await this.getObjetApi();
    console.log(removerDado);
    removerDado.splice(index, 1);
    await this.storage.set("removerDado", JSON.stringify(removerDado));
    console.log(removerDado);
  } */


}
