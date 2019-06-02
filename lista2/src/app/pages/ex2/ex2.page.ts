import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.page.html',
  styleUrls: ['./ex2.page.scss'],
})
export class Ex2Page implements OnInit {


  public char = true;
  public entrada;

  muda(){
    if (this.entrada.length >= 5)
      this.char = false;
    else
      this.char = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
