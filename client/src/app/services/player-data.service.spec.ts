/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PlayerDataService } from './player-data.service';

describe('PlayerDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPlayerDataService]
    });
  });

  it('should ...', inject([GetPlayerDataService], (service: GetPlayerDataService) => {
    expect(service).toBeTruthy();
  }));
});
