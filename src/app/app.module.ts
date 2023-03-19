import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthPage } from './auth-page/auth.page';
import { MainModule } from './main/main.module';
import { SignUpPage } from './sign-up/sign-up.page';

@NgModule({
  declarations: [
    AppComponent,
    AuthPage,
    SignUpPage,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
