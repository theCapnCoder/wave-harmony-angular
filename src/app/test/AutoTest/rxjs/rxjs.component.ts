import { Component } from '@angular/core';
import {
  timer,
  filter,
  take,
  interval,
  mergeMap,
  delay,
  from,
  audit,
  takeUntil,
  EMPTY,
  forkJoin,
  of,
  map,
  startWith,
  race,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent {
  constructor() {
    console.log('enter');

    forkJoin([timer(500, 1000), of(1, 2, 3), EMPTY]).subscribe(console.log);

    console.log('end');
  }
}
