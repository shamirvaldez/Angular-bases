import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Contadormodule } from './contador/contador.module';
import { heroesModule } from './heroes/heores.module';

//crear un modulo llamado Contadormodule
//hacer la declaraciones y exportaciones


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    heroesModule,
    Contadormodule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
