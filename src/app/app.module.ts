import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { NotFoundComponent } from './not-found.component';
import { UserService } from './service/user.service';
import { MaterialModule } from './material.module';
import { UserComponent } from './user/user.component';
import { RepoListComponent } from './repo-list/repo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPageComponent,
    NotFoundComponent,
    UserComponent,
    RepoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
