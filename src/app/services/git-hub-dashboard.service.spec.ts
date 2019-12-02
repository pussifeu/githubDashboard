import {TestBed} from '@angular/core/testing';
import {GitHubDashboardService} from './git-hub-dashboard.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('GitHubDashboardService', () => {
    let gitHubDashboardService: GitHubDashboardService;
    let http: HttpTestingController;
    beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]
    }));

    beforeEach(() => {
        gitHubDashboardService = TestBed.get(GitHubDashboardService);
        http = TestBed.get(HttpTestingController);
    });
    afterEach(() => {
        http.verify();
    });
    it('should be created', () => {
        const service: GitHubDashboardService = TestBed.get(GitHubDashboardService);
        expect(service).toBeTruthy();
    });
});
