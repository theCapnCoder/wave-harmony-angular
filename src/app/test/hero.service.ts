import { Injectable } from '@angular/core';
import { HEROES, Hero } from './heroes/hero';
import { Observable, of } from 'rxjs';
import { MessageService } from './messages/message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
