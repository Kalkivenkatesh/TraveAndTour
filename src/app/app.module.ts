import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
  

];
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/* @NgModule({
  declarations: [AppComponent,LoginComponent,
    AppComponent, Appproduct, AppRouting, OnewayComponent, TwowaybindingComponent, IfdemoComponent,
     SwitchdemoComponent, FordemoComponent, LikesdemoComponent],
  imports: [BrowserModule,AppRoutingModule,RouterModule.forRoot(appRoutes), NgbModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent]
}) */