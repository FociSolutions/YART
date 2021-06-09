import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css']
})
export class RepeaterComponent implements OnInit {

  number$: Observable<number[]> = of([1, 2, 3, 4, 5]);

  constructor() { }

  ngOnInit(): void {
  }

}
