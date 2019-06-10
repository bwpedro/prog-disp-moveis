import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Modal1Page } from '../modal1/modal1.page';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.page.html',
  styleUrls: ['./ex3.page.scss'],
})
export class Ex3Page implements OnInit {

  constructor(public modal: ModalController) { }

  public arrayAtividades = [
    new Atividade("02", "11/04", "ProvaAAAAA", "Vai cair tudoOOOOO", "TUUUUUUUDO", "Não estudadAAAAAA")
  ]

  i;

  async editar(atividade){
    const pagina = await this.modal.create({
      component: Modal1Page,
      componentProps: {id: atividade.id, data: atividade.data, tipo: atividade.atividade, desc: atividade.descricao, cont: atividade.conteudo, stat: atividade.status, criar: 3},
    });
    await pagina.present();

    const {data} = await pagina.onDidDismiss();

    if(data.deleta){
      this.arrayAtividades.splice(this.arrayAtividades.indexOf(data.id))
    } else {
      for (this.i in this.arrayAtividades) {
        if (this.arrayAtividades[this.i].id == data.id) {
          this.arrayAtividades[this.i].data = data.data;
          this.arrayAtividades[this.i].atividade = data.tipo;
          this.arrayAtividades[this.i].descricao = data.desc;
          this.arrayAtividades[this.i].conteudo = data.cont;
          this.arrayAtividades[this.i].status = data.stat;
          break;
        }
      }
    }
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