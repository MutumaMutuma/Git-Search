import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserService} from './users/user.service';
// import { NgProgressModule } from 'ngx-progressbar';
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { UserComponent } from './user/user.component';

const routes:Routes=[
  {path:"landing",component:LandingComponent},
  {path:"user",component:UserComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UserComponent,
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routingComponents = [UserComponent, LandingComponent]