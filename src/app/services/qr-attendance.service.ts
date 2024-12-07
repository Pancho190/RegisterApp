import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QrAttendanceService {

  constructor() { }

  // Método para generar el contenido del QR
  generateQRCode(subject: string): string {
    const currentDate = new Date().toISOString().split('T')[0];  // Formato de fecha YYYY-MM-DD
    return `${subject} ${currentDate}`;  // Devuelve un string que se usará como contenido del QR
  }
}
