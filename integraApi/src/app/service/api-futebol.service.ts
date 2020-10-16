import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiFutebolService {
  public url: string = environment.baseUrl2;
  constructor(public httpclient: HttpClient) {}

  public getAllPartidas() {
    return  this.httpclient.get(this.url);
  }

/*   createLista() {
    return this.httpClient.post(this.api);
  }

  cadastrarLista() {
    return this.httpClient.get(this.api)
  }

  updateLista() {

  }

  deletarLista() {

  } */
}
