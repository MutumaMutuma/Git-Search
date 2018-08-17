import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    // NgProgressModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const routingComponents = [UserComponent, LandingComponent]