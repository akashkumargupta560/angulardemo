import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FootorComponent } from './footor/footor.component';


@NgModule({
  declarations: [
    CoreComponent,
    //NavbarComponent,
    FootorComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
