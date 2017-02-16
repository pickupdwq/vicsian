/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyHeadService } from './my-head.service';

describe('MyHeadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyHeadService]
    });
  });

  it('should ...', inject([MyHeadService], (service: MyHeadService) => {
    expect(service).toBeTruthy();
  }));
});
