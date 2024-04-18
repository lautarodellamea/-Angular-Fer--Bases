import { Component } from "@angular/core";

@Component({
  // como quiero llamar al componente en el html
  selector: 'app-counter',
  templateUrl: './counter.component.html',

})

export class CounterComponent {

  public counter: number = 10;

  increaseBy(value: number): void {
    if (this.counter + value < 0) return
    this.counter += value
  }

  resetCounter(): void {
    this.counter = 10
  }

}

