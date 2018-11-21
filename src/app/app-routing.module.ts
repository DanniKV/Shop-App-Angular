import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {CustomersListComponent} from './customers/customers-list/customers-list.component';
import {CustomerDetailsComponent} from './customers/customer-details/customer-details.component';
import {CustomerAddComponent} from './customers/customer-add/customer-add.component';
import {CustomerUpdateComponent} from './customers/customer-update/customer-update.component';
import {LogInComponent} from './customers/log-in/log-in.component';
import {AuthGuard} from './shared/guard/auth.guard';


const routes: Routes = [
  {path: 'customers/:id', component: CustomerDetailsComponent, AuthGuard},
  {path: 'customer-add', component: CustomerAddComponent, AuthGuard},
  {path: 'customer-update/:id', component: CustomerUpdateComponent, AuthGuard},
  {path: 'customers', component: CustomersListComponent, AuthGuard},
  {path: 'log-in', component: LogInComponent},
  {path: '', component: WelcomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
