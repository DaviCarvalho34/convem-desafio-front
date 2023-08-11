import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000';

  constructor() {}

  getApiUrl(endpoint: string): string {
    return `${this.baseUrl}/${endpoint}`;
  }
}
