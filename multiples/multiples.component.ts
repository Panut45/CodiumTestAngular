import { Component } from '@angular/core';

// selector == 
// templateUrl == path to file app.component.html
//   
@Component({
    selector: 'app-multiples',
    templateUrl: './multiples.component.html',
    styleUrls: ['./multiples.component.css']
})
export class Multiples {

    Multiples(value: number) {

        for (let i = 1; i <= value; i++)
            // Three and Five Print "FizzBuzz"
            if (i % 3 == 0 && i % 5 == 0) {
                console.log("FizzBuzz")
            }

            // Three Print "Fizz"
            else if (i % 3 == 0) {
                console.log("Fizz")
            }

            // Five Print "Buzz"
            else if (i % 5 == 0) {
                console.log("Buzz")
            }

            // Other Print i
            else {
                console.log(i)
            }
        
        return
    }
}
