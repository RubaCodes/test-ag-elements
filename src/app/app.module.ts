import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PopupComponent } from './popup/popup.component';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule],
  declarations: [PopupComponent],
})
export class AppModule {
  constructor(injector : Injector){
    const popup = createCustomElement(PopupComponent, {injector})
    customElements.define('my-popup', popup)
  }
  ngDoBootstrap(){}
}