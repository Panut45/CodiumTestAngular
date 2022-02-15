import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-between-else-finally',
  templateUrl: './between-else-finally.component.html',
  styleUrls: ['./between-else-finally.component.css']
})
export class BetweenElseFinallyComponent implements OnInit {

  Else = "else: program have error => else stop";
  finally = "finally: program have error or run => finally run"

  constructor() { }

  ngOnInit(): void {
  }

}
