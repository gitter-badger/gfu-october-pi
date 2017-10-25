import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Led } from '../shared/led';

@Component({
  selector: 'pi-color-form',
  templateUrl: './color-form.component.html',
  styleUrls: ['./color-form.component.scss']
})
export class ColorFormComponent implements OnInit {

  @Output()
  colorChange = new EventEmitter<Partial<Led>>();

  color = 'red';

  constructor() { }

  ngOnInit() {
  }

  /**
   *
   * @param value
   */
  setColor(value: Partial<Led>) {
    this.colorChange.emit(value);
  }

}
