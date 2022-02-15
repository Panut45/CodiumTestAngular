import { Component } from '@angular/core';

// selector == 
// templateUrl == path to file app.component.html
@Component({
    selector: 'app-left-triangle',
    templateUrl: './left-triangle.component.html',
    styleUrls: ['./left-triangle.component.css']
})
export class LeftTriangle {

    LeftTriangle(n: number) {
        let string = "";

        for (let i = 1; i <= n; i++) {
            for (let j = 0; j < n - i; j++) {
                string += " ";
            }

            for (let k = 0; k < i; k++) {
                string += "*";
            }
            string += "\n"
        }

        window.alert(string);
    }
}
