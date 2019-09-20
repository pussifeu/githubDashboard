import {Component, OnInit} from '@angular/core';
import {GitHubDashboardService} from '../services/git-hub-dashboard.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-list-info-git-hub',
    templateUrl: './list-info-git-hub.component.html',
    styleUrls: ['./list-info-git-hub.component.scss']
})
export class ListInfoGitHubComponent implements OnInit {
    reposItems: any;
    userInfos: any;

    constructor(private gitHubDashboardService: GitHubDashboardService,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.getListProjectGit(this.route.snapshot.queryParams.username);
        this.getUserInfoGit(this.route.snapshot.queryParams.username);
    }


    getListProjectGit(user: any) {
        this.gitHubDashboardService.aGetReposByUser(user).subscribe(
            (res: Response) => {
                this.reposItems = res;
            },
            (error: any) => {
                this.reposItems = [];
            });
    }

    getUserInfoGit(user: any) {
        this.gitHubDashboardService.aGetInfoByUser(user).subscribe(
            (res: Response) => {
                this.userInfos = res;
            },
            (error: any) => {
                this.userInfos = [];
            });
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
