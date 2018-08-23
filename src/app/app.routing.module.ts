import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {NoteComponent} from './note/note.component';
import {TableListComponent} from './table-list/table-list.component';
import {AddNoteComponent} from './note/add-note.component';

const routes: Routes = [
  { path: 'notes', component: NoteComponent },
  { path: 'table', component: TableListComponent},
  { path: 'add', component: AddNoteComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
