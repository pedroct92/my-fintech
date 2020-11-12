import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CurrencyPipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialCommonsModule } from '@my-fintech/commons/material-commons.module';
import { MortgagesModule } from '@my-fintech/mortgages/mortgages.module';
import { AppRoutingModule } from '@my-fintech/app-routing.module';
import { AppComponent } from '@my-fintech/app.component';
import { SharedModule } from '@my-fintech/shared/shared.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgxMaskModule.forRoot(options),
    BrowserModule,
    FlexLayoutModule,
    MaterialCommonsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MortgagesModule
  ],
  providers: [
      CurrencyPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
