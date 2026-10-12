import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httClient: HttpClient) { }
  post(path: string, body: any, config?: object) {
    return this.httClient.post(environment.apiUrl + path, body, {
      ...config,
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        'token': `token ${this.getToken()}`
      }),
    });
  }
  getFabricOrders() {
    return this.httClient.get(`${environment.apiUrl}/fabric-order`, {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        'token': `token ${this.getToken()}`
      }),
    })
  }
  getFabricOrderById(id:number) {
    return this.httClient.get(`${environment.apiUrl}/fabric-order/${id}`, {
      headers: new HttpHeaders({
        // 'Content-Type': 'application/json',
        'token': `token ${this.getToken()}`
      }),
    })
  }
  getToken() {
    return localStorage.getItem("token")
  }
}
