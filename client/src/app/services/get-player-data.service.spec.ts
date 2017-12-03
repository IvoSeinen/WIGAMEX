/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetPlayerDataService } from './get-player-data.service';

describe('GetPlayerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPlayerDataService]
    });
  });

  it('should ...', inject([GetPlayerDataService], (service: GetPlayerDataService) => {
    expect(service).toBeTruthy();
  }));
});
