import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderStyleDirective } from './header-style.directive';
import { FirstLetterPipe } from './first-letter.pipe';
import { CharacterCountPipe } from './character-count.pipe';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderStyleDirective,
    FirstLetterPipe,
    CharacterCountPipe,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
