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
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {EditNoteComponent} from './note/edit-note.component';
import {EditNoteDialogComponent} from './note/edit-note-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    AddNoteComponent,
    TableListComponent,
    EditNoteComponent,
    EditNoteDialogComponent
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
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    PaginationModule.forRoot()
  ],
  providers: [NoteService],
  bootstrap: [AppComponent],
  entryComponents: [EditNoteDialogComponent]
})
export class AppModule { }
