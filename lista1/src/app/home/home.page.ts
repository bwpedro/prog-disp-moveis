import { Component } from '@angular/core';
import { literal } from '@angular/compiler/src/output/output_ast';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router: Router) {}

  mudar(pagina){
    if (pagina == 1)
      this.router.navigateByUrl('/ex1')
    else if (pagina == 2)
      this.router.navigateByUrl('/ex2')
    else if(pagina == 3)
      this.router.navigateByUrl('/ex3')
  }

}
