import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatOptionModule, MatRippleModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    MatToolbarModule, MatTooltipModule, MatIconModule, MatDividerModule,
    MatDialogModule, OverlayModule, MatButtonModule, MatMenuModule, MatRippleModule,
    MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule, ReactiveFormsModule, MatOptionModule, FlexLayoutModule
  ],
  exports: [
    MatToolbarModule, MatTooltipModule, MatIconModule, MatDividerModule,
    MatDialogModule, OverlayModule, MatButtonModule, MatMenuModule, MatRippleModule,
    MatCardModule, MatFormFieldModule, MatSelectModule, MatInputModule, ReactiveFormsModule, MatOptionModule, FlexLayoutModule
  ],
  declarations: [],
})
export class MaterialCommonsModule {
}
