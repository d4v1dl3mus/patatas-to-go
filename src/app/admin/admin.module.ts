import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRouting } from './admin.routing';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AdminComponent,
    SubscribersComponent
  ],
  imports: [
    CommonModule,
    AdminRouting,
    SharedModuleModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
