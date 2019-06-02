import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.page.html',
  styleUrls: ['./modal1.page.scss'],
})
export class Modal1Page implements OnInit {

  @Input() titulo: string;

  id;
  data;
  tipo;
  desc;
  cont;
  stat;

  criar = 1;

  constructor(public modal: ModalController) { }

  close(){
    this.modal.dismiss()
  }

  modalCriar(){
    this.modal.dismiss({
      id: this.id,
      data: this.data,
      tipo: this.tipo,
      desc: this.desc,
      cont: this.cont,
      stat: this.stat
    })
  }

  ngOnInit() {
  }

}
