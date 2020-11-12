import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCommonsModule } from '../commons/material-commons.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
      NotFoundComponent, HeaderComponent, FooterComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule, RouterModule, MaterialCommonsModule
  ]
})
export class SharedModule { }
