import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { CounterModule } from './counter/counter.module';
import { HeroesModule } from './heroes/heroes.module';

@NgModule({
  //  aca declaro los componentes que quiero usar en este modulo
  declarations: [
    AppComponent,
    // esto ya no lo debo poner aca, porque lo encapsule en el modulo de heroes
    // HeroComponent,
    // ListComponent
  ],
  // cuando querramos declarar un nuevo modulo lo declaramos aca (los modules siempre van en el import)
  // de esta forma separamos el modulo y sus funcionalidades como si fuera un archivo de barril, si tuvieramos muchos componentes definidos en el modulo del counter ganamos, ya que no agregariamos mas lineas aca, si no hicieramos el modulo counter en el declarations deberiamos agregar cada componente que se encuentre en counter, lo mismo con los componentes hero y list de heroes
  imports: [
    BrowserModule,
    AppRoutingModule,
    CounterModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
