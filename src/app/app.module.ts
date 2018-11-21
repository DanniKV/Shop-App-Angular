import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomerAddComponent } from './customers/customer-add/customer-add.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CustomerUpdateComponent } from './customers/customer-update/customer-update.component';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { LogInComponent } from './customers/log-in/log-in.component';
import {AuthenticationService} from './shared/services/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    NavbarComponent,
    WelcomeComponent,
    CustomerDetailsComponent,
    CustomerAddComponent,
    CustomerUpdateComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule, //For use with real DB
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule


],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
