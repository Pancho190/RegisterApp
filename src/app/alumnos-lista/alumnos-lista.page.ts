import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { AttendanceService } from '../services/attendance-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos-lista',
  templateUrl: './alumnos-lista.page.html',
  styleUrls: ['./alumnos-lista.page.scss'],
})
export class AlumnosListaPage implements OnInit {
  attendedClasses: any[] = []; // Almacena las clases asistidas

  constructor(private attendanceService: AttendanceService, private router: Router) {}

  ngOnInit() {
    // Cargar asistencias al iniciar
    this.loadAttendances();
  }

  // Método para escanear el QR y registrar asistencia
  scanQRCode() {
    BarcodeScanner.startScan().then((barcodeData: any) => {
      if (barcodeData.hasContent) {
        console.log('Código QR escaneado:', barcodeData.content);

        // Guardar asistencia en el servidor
        const attendance = { id: Date.now().toString(), presente: true, data: barcodeData.content };
        this.attendanceService.addAttendance(attendance).subscribe(() => {
          this.attendedClasses.push(attendance); // Actualizar la lista local
          alert('Asistencia registrada correctamente');
        });
      } else {
        alert('No se detectó un código QR válido');
      }
    }).catch((err: any) => {
      console.log('Error en el escáner QR', err);
      alert('Error al intentar escanear el código QR');
    });
  }

  // Cargar asistencias desde el servidor
  loadAttendances() {
    this.attendanceService.getAttendances().subscribe((data) => {
      this.attendedClasses = data;
    });
  }

  cerrarSesion() {
    // Limpia el almacenamiento local o cualquier variable de sesión
    localStorage.clear();
    sessionStorage.clear();

    // Redirige al usuario a la página de login
    this.router.navigate(['/login']);
  }
}