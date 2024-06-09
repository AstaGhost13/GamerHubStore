import { TestBed } from '@angular/core/testing';

import { AggTareaService } from './agg-tarea.service';

describe('AggTareaService', () => {
  let service: AggTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AggTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
