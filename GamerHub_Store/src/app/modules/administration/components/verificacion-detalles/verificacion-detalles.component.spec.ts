import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificacionDetallesComponent } from './verificacion-detalles.component';

describe('VerificacionDetallesComponent', () => {
  let component: VerificacionDetallesComponent;
  let fixture: ComponentFixture<VerificacionDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerificacionDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerificacionDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
