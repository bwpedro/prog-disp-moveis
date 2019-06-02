import { Component } from '@angular/core';
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
    else if(pagina == 4)
      this.router.navigateByUrl('/ex4')
  }
}
