import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CustomerDataComponent } from './customer-data/customer-data.component';
import { CustomerDataService } from './customer-data.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CustomerDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
