import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GitHubDashboardService} from '../services/git-hub-dashboard.service';

@Component({
    selector: 'app-detail-repository',
    templateUrl: './detail-repository.component.html',
    styleUrls: ['./detail-repository.component.scss']
})
export class DetailRepositoryComponent implements OnInit {
    oRepos: any;
    constructor(private route: ActivatedRoute, private gitHubDashboardService: GitHubDashboardService) {
    }

    ngOnInit() {
        this.getReposByUserAndName(this.route.snapshot.queryParams.owner, this.route.snapshot.queryParams.name);
    }

    getReposByUserAndName(user: any, repos: any) {
        this.gitHubDashboardService.aGetReposByUserAndName(user, repos).subscribe(
            (res: Response) => {
                this.oRepos = res;
            },
            (error: any) => {
                this.oRepos = [];
            });
    }
}
