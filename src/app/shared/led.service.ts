import { Injectable, Inject } from '@angular/core';
import { Led } from './led';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import * as tinycolor from 'tinycolor2';

@Injectable()
export class LedService {

  constructor(private client: HttpClient, @Inject('BASE_URL') readonly url: string) { }

  /**
   *
   */
  getLeds(): Observable<Led[]> {
    return this.client.get<string[]>(`${this.url}/api/colors`)
      .map(colors => colors.map((color, index) => ({ color, index })));
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
    return this.client.put(`${this.url}/api/colors/${index}`, { color }, {
      responseType: 'text'
    })
      // tslint:disable-next-line:no-shadowed-variable
      .map(color => ({ index, color }));
  }

}
