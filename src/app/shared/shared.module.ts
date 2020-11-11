import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCommonsModule } from '@my-fintech/commons/material-commons.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule, RouterModule, MaterialCommonsModule
  ]
})
export class SharedModule { }
