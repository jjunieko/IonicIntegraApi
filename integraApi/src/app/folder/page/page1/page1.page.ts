import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ApiService } from "../../../service/api.service";

@Component({
  selector: "app-page1",
  templateUrl: "./page1.page.html",
  styleUrls: ["./page1.page.scss"],
})
export class Page1Page implements OnInit {
  public data: [
    {
      uid: number;
      uf: string;
      state: "RO";
      cases: 0;
      deaths: 0;
      suspects: 61;
      refuses: 2;
      broadcast: false;
      comments: "";
      datetime: "2020-03-18T23:00:00.000Z";
    },
    {
      uid: 12;
      uf: "Acre";
      state: "AC";
      cases: 0;
      deaths: 0;
      suspects: 12;
      refuses: 0;
      broadcast: false;
      comments: "";
      datetime: "2020-03-18T23:00:00.000Z";
    },
    {
      uid: 13;
      uf: "Amazonas";
      state: "AM";
      cases: 1;
      deaths: 0;
      suspects: 18;
      refuses: 26;
      broadcast: false;
      comments: "";
      datetime: "2020-03-18T23:00:00.000Z";
    }
  ];

  constructor(
    public apiService: ApiService,
    public modalFechar: ModalController
  ) {}

  ngOnInit() {
    this.getObjeto();
  }

  async getObjeto() {
    this.apiService.getObjetApi().subscribe((res) => {
      //console.log("estou aqui ...");
      this.data = res.data;
      console.log(res.data);
    });
  }

  fecharCard(): void {
    this.modalFechar.dismiss();
  }
}
