import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class AuthserviceService {
  dbUrl = 'https://e6771af7-3036-4e88-87a0-ffe6c7b75719-00-1q7ws21v90607.kirk.replit.dev/'; // Endpoint JSON Server para usuarios

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };


  constructor(private http: HttpClient) {}

  getUserByUsername(username: string): Observable<any>{
    return this.http.get(`${this.dbUrl}/usuarios?username=${username}`, this.httpOptions);
  }


  // Método para obtener la lista de usuarios
  getUsuarios(): Observable<any> {
    return this.http.get(this.dbUrl);
  }

  // Método para validar usuario y contraseña
  validateUser(username: string, password: string): Observable<any> {
    return new Observable((observer: { next: (arg0: any) => void; complete: () => void; }) => {
      this.getUsuarios().subscribe((data: any[]) => {
        const user = data.find(
          (item: any) =>
            item.usuario === username && item.contrasena === password
        );
        observer.next(user); // Retorna el usuario si coincide
        observer.complete();
      });
    });
  }
}
