import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../customer-data.service';

@Component({
  selector: 'app-customer-data',
  templateUrl: './customer-data.component.html',
  styleUrls: ['./customer-data.component.css']
})
export class CustomerDataComponent implements OnInit {
  customerData: any[] | undefined;
  errorMessage: string | undefined;

  constructor(private customerDataService: CustomerDataService) {}

  ngOnInit() {
    this.customerDataService.getCustomerData()
      .subscribe(
        (data: any[]) => {
          this.customerData = data;
        },
        (error: { message: string; }) => {
          this.errorMessage = 'Error fetching data: ' + error.message;
        }
      );
  }
}


