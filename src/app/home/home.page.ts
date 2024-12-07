import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../services/authservice.service'; // Asegúrate de usar AuthserviceService

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private authService: AuthserviceService) {}

  ngOnInit() {
  
  }
}
