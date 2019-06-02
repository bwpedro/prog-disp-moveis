import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.page.html',
  styleUrls: ['./ex1.page.scss'],
})
export class Ex1Page implements OnInit {

  public anuncios = false;

  anuncio(){
    if(this.anuncios == false){
      this.anuncios = true;
    } else {
      this.anuncios = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
