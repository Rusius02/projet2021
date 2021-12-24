import { TestBed } from '@angular/core/testing';

import { UserDiscussionService } from './user-discussion.service';

describe('UserDiscussionService', () => {
  let service: UserDiscussionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDiscussionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
