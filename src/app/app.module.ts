import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  {path : '/', component : HomeComponent},
  {path : '/welcome', component : WelcomeComponent},

];

@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

