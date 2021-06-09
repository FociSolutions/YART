import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repeater',
  templateUrl: './repeater.component.html',
  styleUrls: ['./repeater.component.css']
})
export class RepeaterComponent implements OnInit {

  numbers: number[] = [1, 2, 3, 4, 5,];

  constructor() { }

  ngOnInit(): void {
  }

}
