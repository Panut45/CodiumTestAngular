import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {
  @Input() step: number = 1;
  @Output() numberChange = new EventEmitter();
  @Input() counter: number = 0;

  decrease() {
    // console.log("Decrease")
    if (this.counter - this.step >= 0) {
      this.counter = this.counter - this.step;
      this.numberChange.emit(this.counter);
    }
  }

  increase() {
    // console.log("Increase")
    if (this.counter + this.step <= 100) {
      this.counter = this.counter + this.step;
      this.numberChange.emit(this.counter);
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
}
