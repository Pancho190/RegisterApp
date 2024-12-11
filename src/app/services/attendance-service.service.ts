import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {
  private apiUrl = 'http://localhost:3000'; // URL del json-server

  constructor(private http: HttpClient) {}

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
