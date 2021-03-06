import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { SQLite } from '@ionic-native/sqlite/ngx';
import { SqlProvider } from 'ionic-query-interface';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Modal1PageModule } from './pages/modal1/modal1.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, Modal1PageModule],
  providers: [
    SQLite,
    SqlProvider,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
