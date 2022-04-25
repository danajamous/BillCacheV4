import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetDataService {
  parentPost:any[]=[];
  totalAmountToPay:number=0;
  savedBills:any[]=[];


  constructor() { 
   // this.observableSavedBills= new BehaviorSubject<any[]>(this.savedBills);
   this.savedBills=   [
  { id: 1, billerName: 'T-Mobile', serviceName: "Prepaid", billingNumber: "202345555",dueDate:'05/08/2022' ,amountToPay: 5.50 },
  { id: 2, billerName: 'George Mason University ', serviceName: "Student Balance",dueDate:'11/30/2022', billingNumber: "G-3788", amountToPay: 5000 },
  { id: 3, billerName: 'Dominion Energy', serviceName: "Energy Bill", billingNumber: "7107 Alexandria", dueDate:'01/25/2022', amountToPay: 220 },
];
  }



}
