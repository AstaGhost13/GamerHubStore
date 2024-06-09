import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaPendienteComponent } from './tarea-pendiente.component';

describe('TareaPendienteComponent', () => {
  let component: TareaPendienteComponent;
  let fixture: ComponentFixture<TareaPendienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaPendienteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TareaPendienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
