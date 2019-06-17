import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Modal1Page } from '../modal1/modal1.page';
import { SqlProvider } from 'ionic-query-interface';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.page.html',
  styleUrls: ['./ex3.page.scss'],
})
export class Ex3Page implements OnInit {

  constructor(public modal: ModalController,
    public db: SqlProvider) { 
      this.db.open('atividades2.db');
                this.definirTabela();
                this.carregarTarefas();
    }

  public arrayAtividades = []

  i;

  async editar(atividade){
    const pagina = await this.modal.create({
      component: Modal1Page,
      componentProps: {id: atividade.id, data: atividade.data, tipo: atividade.atividade, desc: atividade.descricao, cont: atividade.conteudo, stat: atividade.status, criar: 3},
    });
    await pagina.present();

    const {data} = await pagina.onDidDismiss();

    await this.db.table('atividades').delete({id: data.id});

    if(!data.deleta){
      const atividade = {
        data: data.data,
        atividade: data.tipo,
        descricao: data.desc,
        conteudo: data.cont,
        status: data.stat,
      };
      const id = await this.db.table('atividades').insert(atividade);
      this.arrayAtividades.push({id, ...atividade});
    }
    await this.carregarTarefas();
  }

  async carregarTarefas(){
    const listaAtividades = await this.db.table('atividades').all();
    this.arrayAtividades = [...listaAtividades];
  }

  async definirTabela(){
    await this.db.createTable('atividades', {
      data: 'text',
      atividade: 'text',
      descricao: 'text',
      conteudo: 'text',
      status: 'text',
    })
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