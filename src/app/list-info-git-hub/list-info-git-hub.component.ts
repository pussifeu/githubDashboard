import { Component, OnInit } from '@angular/core';
import { GitHubDashboardService } from '../services/git-hub-dashboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { UserModel } from '../models/userModel';

@Component({
    selector: 'app-list-info-git-hub',
    templateUrl: './list-info-git-hub.component.html',
    styleUrls: ['./list-info-git-hub.component.scss']
})
export class ListInfoGitHubComponent implements OnInit {
    reposItems$: Observable<any>;
    userInfos$: Observable<Array<UserModel>>;

    constructor(private gitHubDashboardService: GitHubDashboardService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.userInfos$ = this.route.snapshot.data.resolverData.userInfos;
        this.reposItems$ = this.route.snapshot.data.resolverData.reposItems;
    }

    getDetailItemRepository(itemData: any) {
        const navigationExtras = {
            queryParams: {
                name: itemData.name,
                owner: itemData.owner.login,
                parent_page: 'list'
            }
        };
        if (itemData !== '') {
            this.router.navigate(['detail-repository'], navigationExtras);
        }
    }
}
