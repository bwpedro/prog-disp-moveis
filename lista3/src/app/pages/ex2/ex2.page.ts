import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Modal1Page } from '../modal1/modal1.page';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.page.html',
  styleUrls: ['./ex2.page.scss'],
})
export class Ex2Page implements OnInit {

  constructor(public modal: ModalController) { }

  public arrayAtividades = [
    new Atividade("01", "03/04", "Prova", "Vai cair tudo", "TUDO", "Não estudado"),
    new Atividade("02", "11/04", "ProvaAAAAA", "Vai cair tudoOOOOO", "TUUUUUUUDO", "Não estudadAAAAAA")
  ]

  async criar(){
    const pagina = await this.modal.create({
      component: Modal1Page
    });
    await pagina.present();

    const {data} = await pagina.onDidDismiss();
    this.arrayAtividades.push(new Atividade(data.id, data.data, data.tipo, data.desc, data.cont, data.stat));
  }

  async mostrar(atividade){
    const pagina = await this.modal.create({
      component: Modal1Page,
      componentProps: {id: atividade.id, data: atividade.data, tipo: atividade.atividade, desc: atividade.descricao, cont: atividade.conteudo, stat: atividade.status, criar: 2},
    });
    await pagina.present();
  }

  ngOnInit() {
  }

}

class Atividade{
  public id;
  public data;
  public atividade;
  public descricao;
  public conteudo;
  public status;

  constructor(id, data, atividade, descricao, conteudo, status){
    this.id = id;
    this.data = data;
    this.atividade = atividade;
    this.descricao = descricao;
    this.conteudo = conteudo;
    this.status = status;
  }
}