import { Component } from "@angular/core";


@Component({
  selector:'app-counter',
  template: `<h1>Hola component Counter</h1>
  <h3>Bienvenido a angular {{ counter }}</h3>

<button (click)="increaseBy(+1)">+1</button>
<button (click)="reset()">Reset</button>
<button (click)="increaseBy(-1)">-1</button>`
})
export class CounterComponent{
  public counter: number = 10;

  increaseBy(value: number):void{
    this.counter +=value;
  }
  reset(){
    this.counter=10;
  }
}
