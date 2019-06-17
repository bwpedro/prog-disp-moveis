import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { SqlProvider } from 'ionic-query-interface';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.page.html',
  styleUrls: ['./ex1.page.scss'],
})
export class Ex1Page implements OnInit {

  constructor(public alert: AlertController,
              public db: SqlProvider) { 

                this.db.open('atividades.db');
                this.definirTabela();
                this.adicionar();
                this.carregarTarefas();
              }


  public arrayAtividade = []

  async mostrar(atividade){
    const msg = await this.alert.create({
      header: atividade.titulo,
      subHeader: atividade.data,
      message: atividade.materia,
      buttons: ['Entendi']
    });
    await msg.present();
  }

  ngOnInit() {
  }

  async adicionar(){
    const atividade1 = {
      titulo: 'Atividade 01',
      materia: 'Dispositivos Móveis',
      data: '03/04'
    };

    const atividade2 = {
      titulo: 'Atividade 02',
      materia: 'Web Servidor',
      data: '03/04'
    };

    const id1 = await this.db.table('atividades').insert(atividade1);
    this.arrayAtividade.push({id1, ...atividade1});

    const id2 = await this.db.table('atividades').insert(atividade2);
    this.arrayAtividade.push({id2, ...atividade2});

  }

  async carregarTarefas(){
    const listaAtividades = await this.db.table('atividades').all();
    this.arrayAtividade = [...listaAtividades];
  }

  async definirTabela(){
    await this.db.createTable('atividades', {
      titulo: 'text',
      materia: 'text',
      data: 'text'
    })
  }
}

class Atividade{
  public titulo;
  public materia;
  public data;

  constructor(t, m, d){
    this.titulo = t;
    this.materia = m;
    this.data = d;
  }
}
