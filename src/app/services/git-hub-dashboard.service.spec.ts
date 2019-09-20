import { TestBed } from '@angular/core/testing';

import { GitHubDashboardService } from './git-hub-dashboard.service';

describe('GitHubDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitHubDashboardService = TestBed.get(GitHubDashboardService);
    expect(service).toBeTruthy();
  });
});
