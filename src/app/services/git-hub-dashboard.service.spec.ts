import { TestBed } from '@angular/core/testing';
import { GitHubDashboardService } from './git-hub-dashboard.service';
import {HttpClientModule} from '@angular/common/http';

describe('GitHubDashboardService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientModule
    ]
  }));

  it('should be created', () => {
    const service: GitHubDashboardService = TestBed.get(GitHubDashboardService);
    expect(service).toBeTruthy();
  });
});
