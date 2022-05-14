import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionScreenComponent } from './transaction-screen/transaction-screen.component';
import { TransactionsService } from './transactions.service';

@NgModule({
  declarations: [
    AppComponent,
    TransactionScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TransactionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
