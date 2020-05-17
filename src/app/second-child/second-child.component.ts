import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-second-child',
  templateUrl: './second-child.component.html',
  styleUrls: ['./second-child.component.css']
})
export class SecondChildComponent implements OnInit, OnChanges {

  @Input() data;
  currentValue: string;
  logChanges = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    const { previousValue, currentValue } = changes.data;

    if (previousValue) {
      this.logChanges.push(previousValue.name);
    }

    if (!changes.data.isFirstChange()) {
      this.currentValue = currentValue.name;
    }
  }

}
