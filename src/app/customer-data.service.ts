import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {
  private apiUrl = 'https://6466e9a7ba7110b663ab51f2.mockapi.io/api/v1/pack1';

  constructor(private http: HttpClient) {}

  getCustomerData(): Observable<any> {
    return this.http.get(this.apiUrl)
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }
}
