import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PartComponent} from './part/part.component';
import {AddPartComponent} from './part/add-part.component';

const routes: Routes = [
  { path: 'parts', component: PartComponent },
  { path: 'add', component: AddPartComponent }
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
