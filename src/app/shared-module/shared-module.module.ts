import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarAdminComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarAdminComponent
  ]
})
export class SharedModuleModule { }
