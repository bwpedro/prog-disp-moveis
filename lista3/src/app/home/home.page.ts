import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public router: Router) {}

  mudar(nPagina){
    if(nPagina == 1)
      this.router.navigateByUrl('/ex1')
    else if(nPagina == 2)
      this.router.navigateByUrl('/ex2')
    else if(nPagina == 3)
      this.router.navigateByUrl('/ex3')
  }
}
