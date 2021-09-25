/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TesterService } from './tester.service';

describe('Service: Tester', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TesterService]
    });
  });

  it('should ...', inject([TesterService], (service: TesterService) => {
    expect(service).toBeTruthy();
  }));
});
