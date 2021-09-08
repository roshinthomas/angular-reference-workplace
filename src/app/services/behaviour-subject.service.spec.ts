import { TestBed } from '@angular/core/testing';

import { BehaviourSubjectService } from './behaviour-subject.service';

describe('BehaviourSubjectService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BehaviourSubjectService = TestBed.get(BehaviourSubjectService);
    expect(service).toBeTruthy();
  });
});
