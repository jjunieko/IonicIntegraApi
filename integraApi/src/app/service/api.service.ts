import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  public url: string = environment.baseUrl;
  constructor(public httpclient: HttpClient) {}

  public getObjetApi() {
    return this.httpclient.get(this.url);
  }
}
