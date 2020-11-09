import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatRippleModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    MatToolbarModule, MatTooltipModule, MatIconModule, MatCheckboxModule, MatDividerModule,
    MatDialogModule, OverlayModule, MatButtonModule, MatMenuModule, MatRippleModule
  ],
  exports: [
    MatToolbarModule, MatTooltipModule, MatIconModule, MatCheckboxModule, MatDividerModule,
    MatDialogModule, OverlayModule, MatButtonModule, MatMenuModule, MatRippleModule
  ],
  declarations: [],
})
export class MaterialModule {
}
