import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { FirstChildComponent } from './first-child/first-child.component';
import { SecondChildComponent } from './second-child/second-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    FirstChildComponent,
    SecondChildComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
