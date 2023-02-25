import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRouting } from './admin.routing';
import { SharedModuleModule } from '../shared-module/shared-module.module';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRouting,
    SharedModuleModule
  ]
})
export class AdminModule { }
