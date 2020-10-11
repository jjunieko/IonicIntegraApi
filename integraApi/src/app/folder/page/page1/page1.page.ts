import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ApiService } from "../../../service/api.service";

@Component({
  selector: "app-page1",
  templateUrl: "./page1.page.html",
  styleUrls: ["./page1.page.scss"],
})
export class Page1Page implements OnInit {
  public brazil: [];

  constructor(
    public apiService: ApiService,
    public modalFechar: ModalController
  ) {}

  ngOnInit() {}

  getPais() {
    this.apiService.getPais().subscribe((res) => {
      //this.brazil = res.dados;
      console.log(res);
    });
  }

  fecharCard(): void {
    this.modalFechar.dismiss();
  }
}
