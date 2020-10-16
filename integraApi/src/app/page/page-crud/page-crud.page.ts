import { Component, OnInit } from '@angular/core';
import { ApiFutebolService } from 'src/app/service/api-futebol.service';

@Component({
  selector: 'app-page-crud',
  templateUrl: './page-crud.page.html',
  styleUrls: ['./page-crud.page.scss'],
})
export class PageCrudPage implements OnInit {
      jogos = [];

  constructor( private apiService: ApiFutebolService) {
    /* this.createLista();
    this.cadastrarLista();
    this.updateLista();
    this.deleteLista();
   }

   createLista() {
    this.apiService.createLista(data).subscribe((data) =>{
      this.createLista = data;
    })
   };


   cadastrLista(){
     this.apiService.cadastrarLista().subscribe((res) =>{
       this.cadastrarLista = res;
       console.log(res);
     }) */
   }
  /*     getJogosFutebol() {
        this.apiService.getAllPartidas().subscribe((res)=> {
          console.log("teste")
          this.jogos = res.data
          console.log(res.data, "aqui.....")
        })
      }
    */

  ngOnInit() {
  }
   
}
