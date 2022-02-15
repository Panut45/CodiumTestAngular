import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leap-year',
  templateUrl: './leap-year.component.html',
  styleUrls: ['./leap-year.component.css']
})
export class LeapYearComponent implements OnInit {

  value1 = 1600;
  value2 = 2000;
  value3 = 1500;
  value4 = 2004;
  value5 = 2008;
  value6 = 2010;

  LeapYear(n: number) {
    if (n % 400 == 0) {
      window.alert("true")
    }
    else if (n % 400 != 0 && n % 100 != 0) {
      if (n % 4 == 0) {
        window.alert("true")
      }
      else {
        window.alert("false")
      }
    }
    else {
      window.alert("false")
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
