import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NoteComponent} from './note/note.component';
import {AppRoutingModule} from './app.routing.module';
import {NoteService} from './note/note.service';
import {HttpClientModule} from '@angular/common/http';
import {AddNoteComponent} from './note/add-note.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
