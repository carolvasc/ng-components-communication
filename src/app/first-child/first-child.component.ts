import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit, OnChanges {

  @Input() data;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.data)

  }

  ngOnInit(): void {
  }

}
