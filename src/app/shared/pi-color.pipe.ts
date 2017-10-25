import { Pipe, PipeTransform } from '@angular/core';

import * as tinycolor from 'tinycolor2';

@Pipe({
  name: 'piColor'
})
export class PiColorPipe implements PipeTransform {

  /**
   *
   * @param value
   * @param format
   */
  transform(value: string, format?: string): string {
    return tinycolor(value).toString(format);
  }

}
