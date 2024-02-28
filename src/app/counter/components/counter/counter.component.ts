import { Component } from "@angular/core";
import { AppComponent } from "../../../app.component";

@Component({
  selector: 'app-counter',
  template: `
  <h1>{{ title }}</h1>
<hr>
<p> Counter: {{counter}}</p>
<button (click)="increaseBy(1)">+1</button>
<button (click)="dicreaseBy(1)">-1</button>
<button (click)="reset()">reset</button>

  `,
})
export class CounterComponent{
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(value: number):void{
    this.counter += value;
  }
  dicreaseBy(value: number):void{
    this.counter -=value;
  }
  reset():void{
    this.counter =10;
  }
}
