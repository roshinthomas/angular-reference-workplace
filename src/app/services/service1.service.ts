import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';   
import { Observable } from 'rxjs';
import { EmployeeList } from '../datamodal/employee';
 
@Injectable({
  providedIn: 'root'
})
export class Service1Service {
  url: any;
  constructor(private httpClient: HttpClient) {
    this.url = 'http://jsonplaceholder.typicode.com/posts'; 
  }
  
  getEmployees(): Observable<EmployeeList[]> {
    return this.httpClient.get<EmployeeList[]>(this.url)
  } 

  // or

  getEmployees1(): Observable<any> {
    return this.httpClient.get(this.url)
  } 

  getStaticJSONData():Observable<any>{
    return this.httpClient.get('../assets/data.json');
  }
}



