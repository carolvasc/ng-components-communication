import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  form: FormGroup
  childData = {};
  secondDataArray;

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

}
