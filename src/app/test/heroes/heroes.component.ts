import { Component } from '@angular/core';
import { HEROES, Hero } from './hero';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  selectedHero?: Hero;
  heroes = HEROES
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    console.log(hero);
  }
}
