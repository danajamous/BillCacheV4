import { Component, ElementRef } from '@angular/core';
import { GetDataService } from '../get-data.service';



@Component({
  selector: 'app-saved-bills',
  templateUrl: './saved-bills.component.html',
  styleUrls: ['./saved-bills.component.css']
})


export class SavedBillsComponent {
  amountTopayId: string = "";
  checkBoxInputId: string = "";
  totalAmountToPay: number = 0;
  totalAmountToPayDisplay: string = "$0.00";
  data: Array<any>;
  buttonDisabled: boolean = true;
  numberOfCheckedBills: number = 0;

  
  constructor( private getData:GetDataService) {
    this.data=this.getData.savedBills; 
  }
  
ngOnInit() {
    this.data=this.getData.savedBills; 
    console.log(this.data);
  }

  formatDollarValue(n: number): string {
    return `$${(Math.round(n * 100) / 100).toFixed(2)}`;
  }


  deleteRow(element: any) {
    if(confirm("Are you sure? Do you want to delete this bill "+ element.billingNumber+ "? This process cannot be undone.")) {
    
    for (let i = 0; i < this.data.length; ++i) {
      if (this.data[i].id === element.id) {
        this.data.splice(i, 1);
      }
    }
    this.checkBoxInputId = "checkBox" + element.id;
    if((<HTMLInputElement>document.getElementById(this.checkBoxInputId)).checked)
    {
      this.totalAmountToPay -= element.amountToPay;
      this.numberOfCheckedBills--;
      if (this.numberOfCheckedBills == 0)
        this.buttonDisabled = true;
    }
    this.totalAmountToPayDisplay = this.formatDollarValue(this.totalAmountToPay);
    alert("Bill "+ element.billingNumber + " deleted successfully");
  }}

  inquire(element: any) {
    this.amountTopayId = "amountToPay" + element.id;
    this.checkBoxInputId = "checkBox" + element.id;
    (<HTMLLabelElement>document.getElementById(this.amountTopayId)).textContent = this.formatDollarValue(element.amountToPay);
    (<HTMLInputElement>document.getElementById(this.checkBoxInputId)).removeAttribute('disabled');
  }

  toggleCheckbox(element: any, event: any) { 
    if (event.target.checked) {
     this.totalAmountToPay += element.amountToPay; 
     this.numberOfCheckedBills++;
     this.buttonDisabled = false;
    }
    else {
     this.totalAmountToPay -= element.amountToPay;
     this.numberOfCheckedBills--;
     if (this.numberOfCheckedBills == 0)
       this.buttonDisabled = true;
    }
    this.totalAmountToPayDisplay = this.formatDollarValue(this.totalAmountToPay);
   }
  
  payButtonClick(){
    if(confirm("redirect to payment method page ")) {
    }
  }
}

