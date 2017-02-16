import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyHeadComponent } from './my-head/my-head.component';
import { MyHeadDirective } from './my-head.directive';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { MyContentComponent } from './my-content/my-content.component';

import { Routes, RouterModule } from '@angular/router';
import { MyIntroduceComponent } from './my-introduce/my-introduce.component';

const routes: Routes = [
  { 
    path: 'home', component: MyContentComponent },
  {
    path: 'introduce',component:MyIntroduceComponent
  },
  {
       path: '**', redirectTo: "home"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    MyHeadComponent,
    MyHeadDirective,
    MyFooterComponent,
    MyContentComponent,
    MyIntroduceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers:[],
  bootstrap: [AppComponent]
})

export class AppModule { }
