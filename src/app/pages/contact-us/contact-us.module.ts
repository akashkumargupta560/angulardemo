import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactUsRoutingModule } from './contact-us-routing.module';
import { ContactUsComponent } from './contact-us.component';
import { BlogsTwoComponent } from './blogs-two/blogs-two.component';


@NgModule({
  declarations: [
    ContactUsComponent,
    BlogsTwoComponent
  ],
  imports: [
    CommonModule,
    ContactUsRoutingModule
  ]
})
export class ContactUsModule { }
