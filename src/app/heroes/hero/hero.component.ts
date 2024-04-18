import { Component } from '@angular/core';

@Component({
  // le puse este nombre al componente porque esta dentro de heroes
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;


  // como es una clase puedo crear getters y setters y metodos
  // los getters y setters solo son para leer y escribir y se usan como propiedades
  // los metodos son para ejecutar una accion

  // el get se ve como una propiedad pero en realidad es un metodo
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }


  // esto ya seria un metodo, si hago el metodo privado, solo podre a acceder desde la clase osea desde aqui
  // se invocan con parentesis
  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {

    // ponemos asi cuando no implemetamos el metodo todabia
    // TODO
    // throw new Error('Method not implemented.');

    this.name = 'Spiderman';
  }

  changeAge(): void {
    this.age = 25;
  }

  resetForm(): void {
    this.name = 'ironman';
    this.age = 45;
  }


}
