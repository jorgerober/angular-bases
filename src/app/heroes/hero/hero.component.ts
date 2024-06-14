import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'Ironman'
  public age:  number = 40

  changeName():void{
    this.name='Spiderman';
  }
  changeAge():void{
    this.age=45;
  }

  get capitalizedName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age}`
  }

  resetForm():void{
    this.name='Ironman';
    this.age=40;
  }

}
