import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LedComponent } from './led/led.component';
import { LedListComponent } from './led-list/led-list.component';
import { PiColorPipe } from './shared/pi-color.pipe';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { ColorFormComponent } from './color-form/color-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { LedService } from './shared/led.service';
import { LedStubService } from './stubs/led-stub.service';


@NgModule({
  declarations: [
    AppComponent,
    LedComponent,
    LedListComponent,
    PiColorPipe,
    ActionBarComponent,
    ColorFormComponent,
    DashboardComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LedService,
      useClass: LedStubService
    },
    {
      provide: 'BASE_URL',
      useValue: 'https://ac0457fb37b47b2db958fbe3df9b166d.resindevice.io'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
