import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

 heores: string[] = ['Spider-man', 'Iron man', 'Capitan America', 'Hulk', 'Thor'];
 heroeeliminado?: string = "";

 BorrarHeroe(): void {  
  const heroeBorrado = this.heores.pop();

  this.heroeeliminado = heroeBorrado;
 
 }
}
