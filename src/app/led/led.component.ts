import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { Led } from '../shared/led';

@Component({
  selector: 'pi-led',
  templateUrl: './led.component.html',
  styleUrls: ['./led.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.Emulated
})
export class LedComponent implements OnInit {

  @Input('led')
  led: Led;

  @Output()
  ledClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  /**
   *
   * @param ev
   */
  handleClick(ev: MouseEvent) {
    if (ev.shiftKey) {
      this.ledClick.emit(this.led.index);
    }
  }

}
