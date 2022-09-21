import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';



@NgModule({
 declarations:[  //donde van los componentes para el modulo
    HeroeComponent,
    ListadoComponent
 ],
 exports: [     //cosas que sean publicas
       ListadoComponent
],
 imports: [  //van modulos
  CommonModule
 ]

})

export class heroesModule {}