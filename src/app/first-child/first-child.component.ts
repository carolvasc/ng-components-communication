import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css']
})
export class FirstChildComponent implements OnInit, OnChanges {

  @Input() data;
  @Output() dataToParent = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder, private commnucationService: CommunicationService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: this.fb.control(''),
    })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.data.isFirstChange()) {
      this.form.reset({ name: changes.data.currentValue.name });
    }
  }

  onSubmit() {
    this.dataToParent.emit(this.form.value);
  }

  clearSiblingLog() {
    this.commnucationService.clearLog([]);
  }

}
