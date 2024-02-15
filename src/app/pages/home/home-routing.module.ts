import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path:'blogs', component: BlogsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
