import { TestBed } from '@angular/core/testing';

import { QrAttendanceService } from './qr-attendance.service';

describe('QrAttendanceService', () => {
  let service: QrAttendanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrAttendanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
