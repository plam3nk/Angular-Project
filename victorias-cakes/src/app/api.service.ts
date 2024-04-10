import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Cake } from './types/cake';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getCakes() {
    const { apiUrl } = environment;
    return this.http.get<Cake[]>(`${apiUrl}/cakes`);
  }

  getCake(id: string) {
    const { apiUrl } = environment;
    return this.http.get<Cake>(`${apiUrl}/cakes/${id}`);
  }
}
