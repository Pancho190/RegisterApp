import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AttendanceService {
  apiUrl = 'https://e6771af7-3036-4e88-87a0-ffe6c7b75719-00-1q7ws21v90607.kirk.replit.dev/'; // URL del json-server

  HttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  }

  constructor(private http: HttpClient) {}

  getUsersByUsername(username: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios?username=${username}`, {headers: this.HttpOptions.headers});
  }

  // Obtener usuarios
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/usuarios`);
  }

  // Obtener asistencias
  getAttendances(): Observable<any> {
    return this.http.get(`${this.apiUrl}/asistencias`);
  }

  // Registrar asistencia
  addAttendance(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/asistencias`, data);
  }
}
