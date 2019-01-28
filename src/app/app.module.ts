import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FriendsComponent } from './friends/friends.component';
import { GenualyLikeComponent } from './genualy-like/genualy-like.component';
import { UseForCollegeHelpComponent } from './use-for-college-help/use-for-college-help.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FriendsComponent,
    GenualyLikeComponent,
    UseForCollegeHelpComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
