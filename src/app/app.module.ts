import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderStyleDirective } from './header-style.directive';
import { FirstLetterPipe } from './first-letter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderStyleDirective,
    FirstLetterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
