import { Injectable } from '@angular/core';
import { Hero } from './model/hero';
import { HEROES } from './model/array-heros';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
 

  constructor(private messageSrv: MessageService) { }

  getHeroes(): Hero[] {
    this.messageSrv.add('HeroService: capturando heroes');
    return HEROES;
  }
  add(heroe: Hero): Hero[] {
    heroe.id = HEROES.length + 1;
    HEROES.push(heroe);
    this.messageSrv.add('{{heroe.name}} creado correctamente');
    return HEROES;
  }
}
