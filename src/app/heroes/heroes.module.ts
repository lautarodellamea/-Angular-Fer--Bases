import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  // aca declaro los componentes que quiero usar en este modulo
  declarations: [HeroComponent, ListComponent],

  // lo que el mondo exterior puede consumir
  exports: [HeroComponent, ListComponent],

  // recordar los modulos en los imports
  imports: [
    // importo este modulo aca porque se usan directivas como ngIf, ngFor, etc
    CommonModule
  ],

})
export class HeroesModule {

}
