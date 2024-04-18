import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";

@NgModule({
  // en declarations se declaran los componentes que se van a utilizar en este modulo
  declarations: [CounterComponent],
  // esto lo hago para decirle al mundo exterior que puede consumir el counterComponent
  exports: [CounterComponent],


})
export class CounterModule { }
