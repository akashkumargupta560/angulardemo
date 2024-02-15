import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'contact-us', loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsModule) }, 
  { path: 'core', loadChildren: () => import('./core/core.module').then(m => m.CoreModule) },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
