import { Component } from "@angular/core";

@Component({
    selector: 'app-none-base-pyramid',
    templateUrl: './none-base-pyramid.component.html',
    styleUrls: ['./none-base-pyramid.component.css']
})

export class NoneBasePyramid {
    NoneBasePyramid(n: number) {
        let string = "";

        for (let i = 1; i <= n; i++) {
            // print spaces
            for (let j = n; j > i; j--) {
                string += " ";
            }

            // print star
            for (let k = 0; k < i * 2 - 1; k++) {
                if (k == 0 || k == 2 * i - 2) {
                    string += "*";
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }

        window.alert(string);
    }
}