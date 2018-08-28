import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NoteComponent} from './note/note.component';
import {AppRoutingModule} from './app.routing.module';
import {NoteService} from './note/note.service';
import {HttpClientModule} from '@angular/common/http';
import {AddNoteComponent} from './note/add-note.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TableListComponent} from './table-list/table-list.component';
import {PaginationModule} from 'ngx-bootstrap';
import {
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {EditNoteComponent} from './note/edit-note.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    AddNoteComponent,
    TableListComponent,
    EditNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSortModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    PaginationModule.forRoot()
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
