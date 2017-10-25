import { Component, OnInit, OnDestroy } from '@angular/core';
import { Led } from '../shared/led';
import { LedService } from '../shared/led.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/interval';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'pi-led-list',
  templateUrl: './led-list.component.html',
  styleUrls: ['./led-list.component.scss']
})
export class LedListComponent implements OnInit, OnDestroy {

  leds: Led[];

  leds$: Observable<Led[]>;

  private sub: Subscription;

  constructor(private service: LedService) {

  }

  ngOnInit() {
    this.loadColors();
    // this.leds$ = Observable.interval(1000)
    //   .take(1)
    //   .switchMap(v => this.service.getLeds());
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  /**
   *
   * @param index
   */
  updateColor(index: number) {
    this.service.setLed(index)
      .subscribe(led => {
        console.log(led);
        this.leds[index] = led;
      });
  }

  /**
   *
   * @param value
   */
  setColors(value: Partial<Led>) {
    console.log(value);
    // @TODO delegate to LedService
  }

  /**
   *
   */
  loadColors() {
    this.sub = Observable.interval(1000)
      .take(1)
      .switchMap(v => this.service.getLeds())
      .subscribe(result => this.leds = result);
    // this.leds$ = this.service.getLeds();
  }

}
