import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgramCardComponent } from './components/program-card/program-card.component';
import { FilterCardComponent } from './components/filter-card/filter-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramCardComponent,
    FilterCardComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
