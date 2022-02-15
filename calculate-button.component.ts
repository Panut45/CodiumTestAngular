import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calculate-button',
  templateUrl: './calculate-button.component.html',
  styleUrls: ['./calculate-button.component.css']
})
export class CalculateButtonComponent implements OnInit {

  @Input() num: number = 0;
  @Output() numberChange = new EventEmitter();

  getValue() {
    console.log("getValue")
    this.numberChange.emit(this.num);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
