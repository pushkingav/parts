import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PartComponent} from './part/part.component';
import {AppRoutingModule} from './app.routing.module';
import {PartService} from './part/part.service';
import {HttpClientModule} from '@angular/common/http';
import {AddPartComponent} from './part/add-part.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PaginationModule} from 'ngx-bootstrap';
import {
  ErrorStateMatcher,
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
  MatTableModule,
  MatToolbarModule,
  ShowOnDirtyErrorStateMatcher
} from '@angular/material';
import {EditPartDialogComponent} from './part/edit-part-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    PartComponent,
    AddPartComponent,
    EditPartDialogComponent
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
    MatToolbarModule,
    PaginationModule.forRoot()
  ],
  providers: [PartService, {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher} ],
  bootstrap: [AppComponent],
  entryComponents: [EditPartDialogComponent]
})
export class AppModule { }
