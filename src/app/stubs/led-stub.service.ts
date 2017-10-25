import { Injectable } from '@angular/core';
import { Led } from '../shared/led';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import * as tinycolor from 'tinycolor2';

@Injectable()
export class LedStubService {

  private leds: Led[] = Array(8).fill(null).map((value, index) => {
    return {
      index,
      color: 'red'
    };
  });

  constructor() { }

  /**
   *
   */
  getLeds(): Observable<Led[]> {
    return Observable.of(this.leds);
  }

  /**
   *
   * @param index
   */
  getLed(index: number): Observable<Led> {
    return this.getLeds()
      .map(leds => leds[index]);
  }

  /**
   *
   * @param index
   * @param color
   */
  setLed(index: number, color: string = tinycolor.random().toString()): Observable<Led> {
    const o = { index, color };
    this.leds[index] = o;
    return Observable.of(o);
  }

}
