import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SecondChildComponent } from '../second-child/second-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  form: FormGroup
  childData = {};
  secondDataArray;

  @ViewChild(SecondChildComponent) secondChild: SecondChildComponent;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: this.fb.control(''),
    })
  }

  onSubmit() {
    this.childData = this.form.value;
    this.secondDataArray = this.childData;
  }

  getDataFromChild(event) {
    this.form.reset({ name: event.name });
    this.secondDataArray = { name: event.name };
  }

  clearChildLog() {
    this.secondChild.clearLog();
  }

}
