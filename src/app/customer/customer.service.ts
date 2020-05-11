import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

GetCustomersReview(ansi){
  return this.http.get('https://localhost:44361/Customer/'+ ansi);
}

}
