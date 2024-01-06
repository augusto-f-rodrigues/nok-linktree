import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PanelModule, ButtonModule],
  exports: [PanelModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
