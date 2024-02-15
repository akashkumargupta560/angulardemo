import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us.component';
import { BlogsTwoComponent } from './blogs-two/blogs-two.component';

const routes: Routes = [
  { path: '', component: ContactUsComponent },
  {path:'blogs-two', component:BlogsTwoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactUsRoutingModule { }
