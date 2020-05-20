import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  constructor() { }

  clear = new EventEmitter();

  clearLog(value) {
    this.clear.emit(value);
  }
}
