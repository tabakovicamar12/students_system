import { Injectable } from '@angular/core';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = "";

  constructor() {
    this.url = environment.url;
  }

  async register(email: string, password: string, role: string = 'user') {
    const response = await fetch(`${this.url}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, role })
    });
    return response.json();
  }

  async login(email: string, password: string) {
    const response = await fetch(`${this.url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    return response.json();
  }
}
