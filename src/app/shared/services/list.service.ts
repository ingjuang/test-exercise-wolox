import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {

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


  getList(){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'bearer ' + sessionStorage.getItem('fgh0x01b4#8')
    });
    const promise = new Promise((resolve, reject) => {
      this.http
        .get<any[]>(this.apiUrl+'techs', this.httpOptions)
        .toPromise()
        .then((res: any) => {
          // Success
          resolve(res);
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
