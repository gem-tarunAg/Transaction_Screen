import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-transaction-screen',
  templateUrl: './transaction-screen.component.html',
  styleUrls: ['./transaction-screen.component.css']
})
export class TransactionScreenComponent implements OnInit {

  public transactions:any= [];
  public userDetails:any={};

  constructor(private _transactionService:TransactionsService) { }

  ngOnInit(): void {
    this.transactions = this._transactionService.getAllTransactions();

    this.transactions.sort((a: any, b: any) => (a.date <b.date ? -1: 1));

    this.userDetails = this._transactionService.getUser();
  }

}
