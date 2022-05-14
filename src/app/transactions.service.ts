import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor() { }

  getUser(){
    return {
      "userName":"Admin",
      "mobile":"9119340560",
      "password":"Admin@123"
    }
  }

  getAllTransactions(){
    return[{"transactionDirection":"Sent",
      "transactionType":"Pay",
      "amount":3000,
      "date":new Date("2020-10-7"),
      "transactionId":"AD78946564563254"
      },
      {"transactionDirection":"Recieved",
      "transactionType":"Collect",
      "amount":1000,
      "date":new Date("2020-11-19"),
      "transactionId":"AJ78946564563256"
      },
      {"transactionDirection":"Recieved",
      "transactionType":"Pay",
      "amount":500,
      "date":new Date("2020-11-19"),
      "transactionId":"AJ78946564563257"
      },
      {"transactionDirection":"Sent",
      "transactionType":"Collect",
      "amount":2000,
      "date":new Date("2020-11-18"),
      "transactionId":"AD78946564563255"
      }]
  }
}
