import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCommonsModule } from '@my-fintech/commons/material-commons.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule, MaterialCommonsModule
  ]
})
export class SharedModule { }
