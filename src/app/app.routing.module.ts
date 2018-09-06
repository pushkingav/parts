import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PartComponent} from './part/part.component';
import {TableListComponent} from './table-list/table-list.component';
import {AddPartComponent} from './part/add-part.component';
import {EditPartComponent} from './part/edit-part.component';

const routes: Routes = [
  { path: 'parts', component: PartComponent },
  { path: 'table', component: TableListComponent},
  { path: 'add', component: AddPartComponent },
  { path: 'edit', component: EditPartComponent}
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
