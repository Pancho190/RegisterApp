import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthserviceService {
  private dbUrl = 'http://localhost:3000/usuarios'; // Endpoint JSON Server para usuarios

  constructor(private http: HttpClient) {}

  // Método para obtener la lista de usuarios
  getUsuarios(): Observable<any> {
    return this.http.get(this.dbUrl);
  }

  // Método para validar usuario y contraseña
  validateUser(username: string, password: string): Observable<any> {
    return new Observable((observer) => {
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
