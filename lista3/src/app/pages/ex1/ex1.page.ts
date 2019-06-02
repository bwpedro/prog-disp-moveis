import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.page.html',
  styleUrls: ['./ex1.page.scss'],
})
export class Ex1Page implements OnInit {

  constructor(public alert: AlertController) { }


  public arrayAtividade = [
    new Atividade("Atividade 01","Dispositivos Móveis","03/04"),
    new Atividade("Atividade 02","Web Servidor","03/04")
  ]

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
