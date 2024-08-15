import { TestBed } from '@angular/core/testing';

import { NgxLdrsService } from './ngx-ldrs.service';

describe('NgxLdrsService', () => {
  let service: NgxLdrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLdrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
