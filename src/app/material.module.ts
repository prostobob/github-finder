import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ],
  exports: [
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatListModule
  ]
})
export class MaterialModule {}
