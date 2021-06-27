import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SingUpService {

  readonly apiUrl = environment.baseURL;
  
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization'
    })
  };

  constructor(private http: HttpClient) { }

  SingUp(item:any) {
    const promise = new Promise((resolve, reject) => {
      this.http
        .post<any[]>(`${this.apiUrl}signup`, JSON.stringify(item) ,this.httpOptions)
        .toPromise()
        .then((res: any) => {
          // Success
          resolve(res);
          localStorage.setItem('usuario', JSON.stringify(item));
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }
}
