import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { UserService } from './user.service';
import { UserDescriptionComponent } from './user-description/user-description.component';

const routes: Routes = [
  {path: '', component: UserListComponent },
  {path: 'users', component: UserListComponent },
  {path: 'users/:idUser', component: UserDescriptionComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
