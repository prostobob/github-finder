import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatToolbarModule, MatInputModule, MatCardModule, MatButtonModule],
  exports: [MatToolbarModule, MatInputModule, MatCardModule, MatButtonModule]
})
export class MaterialModule {}
