import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = 'http://dummy.restapiexample.com/api/v1/employees';

private record = new Array();
  constructor(private _route: Router, private http: HttpClient) { }

  display()
  {
    return this.record;
  }

  add (value: any)
  {
    this.record.push(value);
  }

  remove (id)
  {
    const index = this.record.findIndex((item) => item.id === id);
    this.record.splice(index,1);
  }

  edit(value)
  {
    const findIndex = this.record.findIndex((item) => item.id === value.id);
    this.record[findIndex] = value;
    this._route.navigate(['store']); 
  }

  findId(id)
  {
    const index = this.record.findIndex((item) => item.id === id);
    return this.record[index];
  }

// Api Calling By using Promise and Observable Method .....//

// getApi(): Observable <any> {return this.http.get(this.apiUrl);}
// getApi2(): Promise <any> {return this.http.get(this.apiUrl).toPromise();}

}
