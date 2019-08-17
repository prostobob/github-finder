import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchPageComponent } from './search-page/search-page.component';
import { NotFoundComponent } from './not-found.component';


const routes: Routes = [
  { path: 'user/:name', component: SearchPageComponent },
  { path: 'user', component: SearchPageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'user' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
