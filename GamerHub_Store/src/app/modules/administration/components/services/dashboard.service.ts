import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'http://tu-api.com'; // Cambia esto a tu URL de API real

  constructor(private http: HttpClient) { }

  getVerifications(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/verifications`);
  }

  updateVerification(verification: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/verifications/${verification.id}`, verification);
  }


}
