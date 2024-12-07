import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfesorListaPage } from './profesor-lista.page';

describe('ProfesorListaPage', () => {
  let component: ProfesorListaPage;
  let fixture: ComponentFixture<ProfesorListaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfesorListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
