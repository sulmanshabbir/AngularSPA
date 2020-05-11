import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from './customer.service';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  CustomerReviewForm: FormGroup;
  ItemsArray= [];
  constructor(private fb: FormBuilder,private http: HttpClient,private custServ:CustomerService) { }

  ngOnInit(): void {
    this.CustomerReviewForm= this.fb.group({
      ANSI:['']
    });
    
  }
  onSubmit(){
    //B082XY23D5
    //console.log(this.CustomerReviewForm.controls.ANSI.value);
    // this.http.get('https://www.amazon.com/product-reviews/'+ this.CustomerReviewForm.controls.ANSI.value, { responseType: 'text'}).subscribe(res=>{
    //   console.log(res);
    // });

    this.custServ.GetCustomersReview(this.CustomerReviewForm.controls.ANSI.value).subscribe((res: any[])=>{
      this.ItemsArray = res;
    });
    
  }
}