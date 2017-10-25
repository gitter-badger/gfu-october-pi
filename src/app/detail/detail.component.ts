import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LedService } from '../shared/led.service';
import { Led } from '../shared/led';

import 'rxjs/add/operator/delay';

@Component({
  selector: 'pi-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  led: Led;

  constructor(private route: ActivatedRoute, private service: LedService) { }

  ngOnInit() {
    // const index = Number(this.route.snapshot.paramMap.get('index'));
    // this.service.getLed(index)
    //   .delay(2000)
    //   .subscribe(result => this.led = result);
    this.led = this.route.snapshot.data['led'];
  }

}
