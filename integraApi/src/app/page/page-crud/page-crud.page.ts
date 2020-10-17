import { Component, OnInit } from '@angular/core';
import { ApiGithubService } from '../../service/api-github.service';



@Component({
  selector: 'app-page-crud',
  templateUrl: './page-crud.page.html',
  styleUrls: ['./page-crud.page.scss'],
})
export class PageCrudPage implements OnInit {
      login: Array<any> = [];

  constructor(public apiGitHub: ApiGithubService) {
  }

  ngOnInit() {
    this.getGitHubPerfil();
  }


  getGitHubPerfil() {
    this.apiGitHub.getGitHubPage().subscribe((res) => {
      console.log(res,"array")
      this.login = res;
      console.log(res, "estou aqui")
    })
  }

   
}
