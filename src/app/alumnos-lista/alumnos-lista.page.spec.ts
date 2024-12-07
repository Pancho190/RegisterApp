import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlumnosListaPage } from './alumnos-lista.page';

describe('AlumnosListaPage', () => {
  let component: AlumnosListaPage;
  let fixture: ComponentFixture<AlumnosListaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnosListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
