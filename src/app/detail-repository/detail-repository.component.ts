import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GitHubDashboardService} from '../services/git-hub-dashboard.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-detail-repository',
    templateUrl: './detail-repository.component.html',
    styleUrls: ['./detail-repository.component.scss']
})
export class DetailRepositoryComponent implements OnInit {
    oRepos$: Observable<any>;
    constructor(private route: ActivatedRoute, private gitHubDashboardService: GitHubDashboardService) {
    }

    ngOnInit() {
        this.oRepos$ = this.gitHubDashboardService.aGetReposByUserAndName(
            this.route.snapshot.queryParams.owner,
            this.route.snapshot.queryParams.name
        );
    }
}
