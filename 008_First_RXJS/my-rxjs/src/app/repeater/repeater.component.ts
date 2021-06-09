import { Component, OnInit } from '@angular/core';
import { from, Observable, of, range } from 'rxjs';

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css']
})
export class RepeaterComponent implements OnInit {

  number$ = new Observable(s => {
    s.next(0);
    s.next(1);
    s.next(1);
    s.next(2);
    s.next(3);
    s.next(5);
    s.next(8);
    s.next(13);
    s.complete();
  });

  // number$ = range(1, 10);
  // number$ = of(0, 1, 1, 2, 3, 5, 8, 13);
  // number$ = from([0, 1, 1, 2, 3, 5, 8, 13]);

  constructor() {
    this.number$.subscribe({
      next(x) { console.log(x) }
    });
  }

  ngOnInit(): void {
  }

}
