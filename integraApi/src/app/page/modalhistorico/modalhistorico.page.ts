import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ApiGithubService } from "src/app/service/api-github.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-modalhistorico",
  templateUrl: "./modalhistorico.page.html",
  styleUrls: ["./modalhistorico.page.scss"],
})
export class ModalhistoricoPage implements OnInit {
  @Input() id: number;

  public form: FormGroup;
  public editarButao: boolean = false;

  constructor(
    public modalFechar: ModalController,
    public formBuilder: FormBuilder,
    public salvarService: ApiGithubService
  ) {
    this.form = formBuilder.group({
      uf: [""],
      state: [""],
      cases: [""],
      deaths: [""],
      suspects: [""],
      data: [""],
      uid: [""],
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.id || this.id === 0) {
      await this.editarDadosCovidModal();
      this.editarButao = true;
    }
    console.log(this.id, "meu id editar butão");
  }

  public async submitForm(): Promise<void> {
    console.log(this.form.value, "estou aqui modalhist");
    this.salvarService.salvarDadosCv(this.form.value, this.id);
    this.fecharCard();
  }

  public async editarDadosCovidModal(): Promise<void> {
    const edCovid = await this.salvarService.getCovidForm(this.id);
    console.log(edCovid, "editar covid");
    this.form.patchValue(edCovid);
  }

  fecharCard(): void {
    this.modalFechar.dismiss();
  }
}
