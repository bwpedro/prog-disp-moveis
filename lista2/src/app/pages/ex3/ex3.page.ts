import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex3',
  templateUrl: './ex3.page.html',
  styleUrls: ['./ex3.page.scss'],
})
export class Ex3Page implements OnInit {

  public cor;

  constructor() { }

  mudar(vari){
    if (vari == 1)
      this.cor = 'danger';
    else if (vari == 2)
      this.cor = 'success';
    else if (vari == 3)
      this.cor = 'primary';
  }

  ngOnInit() {
  }

}
