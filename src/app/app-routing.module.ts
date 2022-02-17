import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseMetabolismFormComponent } from './routes/base-metabolism-form/base-metabolism-form.component';

const routes: Routes = [{
  path: '',
  component: BaseMetabolismFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
