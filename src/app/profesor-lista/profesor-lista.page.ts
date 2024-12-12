import { Component, OnInit } from '@angular/core';
import { QrAttendanceService } from '../services/qr-attendance.service';  // Asegúrate de que el servicio esté correctamente importado
import { Router } from '@angular/router';


@Component({
  selector: 'app-profesor-lista',
  templateUrl: './profesor-lista.page.html',
  styleUrls: ['./profesor-lista.page.scss'],
})
export class ProfesorListaPage implements OnInit {
  subjects: string[] = ['Matemáticas', 'Física', 'Química', 'Historia'];  // Lista de asignaturas
  selectedSubject: string = '';  // Asignatura seleccionada
  currentQRCode: string = '';  // Código QR actual


  constructor(private qrService: QrAttendanceService, private router: Router) { }

  ngOnInit() {
    // Inicializar el primer código QR
    if (this.subjects.length > 0) {
      this.selectedSubject = this.subjects[0];
      this.generateQRCode();
    }
  }

  // Método para generar el QR de la asignatura seleccionada
  generateQRCode() {
    if (this.selectedSubject) {
      this.currentQRCode = this.qrService.generateQRCode(this.selectedSubject);  // Llamar al servicio para generar el código QR
    }
  }

  // Método que se ejecuta cuando cambia la asignatura seleccionada
  onSubjectChange() {
    this.generateQRCode();  // Regenerar el QR cuando cambia la asignatura
  }

  // Método para refrescar el código QR
  refreshQRCode() {
    this.generateQRCode();  // Refrescar el QR
  }

  cerrarSesion() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }
}
