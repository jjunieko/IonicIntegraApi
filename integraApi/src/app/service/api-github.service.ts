import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiGithubService {

 // public url: "https://api.github.com/users";
  public url: string = environment.baseUrl;
  constructor(public httpclient: HttpClient) {}

   public getGitHubPage() {
     return this.httpclient.get(this.url);
  }
}
