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
import {TableListComponent} from './table-list/table-list.component';
import {Ng2TableModule} from 'ng2-table/ng2-table';
import {PaginationModule} from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    AddNoteComponent,
    TableListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    Ng2TableModule,
    PaginationModule.forRoot()
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
