import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DetailComponent } from '../detail/detail.component';
import { Led } from './led';
import { LedService } from './led.service';

import 'rxjs/add/operator/delay';

@Injectable()
export class DetailGuard implements CanActivate, CanDeactivate<DetailComponent>, Resolve<Led> {

  constructor(private service: LedService) {
  }

  /**
   *
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Led> {
    const index = Number(route.paramMap.get('index'));
    return this.service.getLed(index)
      .delay(2000);
  }

  // tslint:disable-next-line:max-line-length
  canDeactivate(component: DetailComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot): boolean {
    return confirm('Do you really want to leave me?');
  }

  /**
   *
   * @param next
   * @param state
   */
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const index = Number(next.paramMap.get('index'));
    return !Number.isNaN(index) && index >= 0 && index <= 7;
  }
}
