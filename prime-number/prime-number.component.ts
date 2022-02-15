import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prime-number',
  templateUrl: './prime-number.component.html',
  styleUrls: ['./prime-number.component.css']
})
export class PrimeNumberComponent implements OnInit {

  PrimNumber(value: number) {
    for (let i = 2; i <= value; i++) {
      let flag = 0;

      // looping through 2 to user input number
      for (let j = 2; j < i; j++) {
        if (i % j == 0) {
          flag = 1;
          break;
        }
      }

      // if number greater than 1 and not divisible by other numbers
      if (i > 1 && flag == 0) {
        console.log(i);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
