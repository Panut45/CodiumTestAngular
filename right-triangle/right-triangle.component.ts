import { Component, Input } from '@angular/core';

// selector == 
// templateUrl == path to file app.component.html
@Component({
    selector: 'app-right-triangle',
    templateUrl: './right-triangle.component.html',
    styleUrls: ['./right-triangle.component.css']
})
export class RightTriangle {
    @Input() counter: number = 0;

    rightTriangle(value: number) {
        let string = "";

        for (let i = 1; i <= value; i++) {
            for (let j = 0; j < i; j++) {
                string += "*";
            }
            string += "\n";
        }

        console.log(string)
        return(string)
    }

    Display() {
        window.alert(this.rightTriangle(5))
    }
}