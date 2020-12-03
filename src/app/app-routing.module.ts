import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BroadcastCVComponent } from './broadcast-cv/broadcast-cv.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
  {path:'',component:LandingPageComponent},
    {path: 'register', component:BroadcastCVComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
