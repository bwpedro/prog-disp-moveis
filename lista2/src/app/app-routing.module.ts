import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'ex1', loadChildren: './pages/ex1/ex1.module#Ex1PageModule' },
  { path: 'ex2', loadChildren: './pages/ex2/ex2.module#Ex2PageModule' },
  { path: 'ex3', loadChildren: './pages/ex3/ex3.module#Ex3PageModule' },
  { path: 'ex4', loadChildren: './pages/ex4/ex4.module#Ex4PageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
