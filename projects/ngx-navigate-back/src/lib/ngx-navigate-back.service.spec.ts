import { TestBed } from '@angular/core/testing';

import { NgxNavigateBackService } from './ngx-navigate-back.service';

describe('NgxNavigateBackService', () => {
  let service: NgxNavigateBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxNavigateBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
