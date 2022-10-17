import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './additem/additem.component';
import { ListitemComponent } from './listitem/listitem.component';

const routes: Routes = [
  { path: '', component: ListitemComponent },
  { path: 'add', component: AdditemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
