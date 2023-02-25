import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from '../services/auth-guard.service';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { SubscriberComponent } from './subscriber/subscriber.component';


const routes: Routes = [
  { path: '', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'subscribers', component: SubscribersComponent, canActivate: [AuthGuard] },
  { path: 'subscriber/:id', component: SubscriberComponent, canActivate: [AuthGuard]},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AdminRouting { }
