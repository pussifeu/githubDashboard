import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserModel } from '../models/userModel';

@Component({
    selector: 'app-list-info-git-hub',
    templateUrl: './list-info-git-hub.component.html',
    styleUrls: ['./list-info-git-hub.component.scss']
})
export class ListInfoGitHubComponent implements OnInit {
    reposItems$: Observable<any>;
    userInfos$: Observable<Array<UserModel>>;

    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        this.userInfos$ = this.activatedRoute.snapshot.data.resolverData.userInfos;
        this.reposItems$ = this.activatedRoute.snapshot.data.resolverData.reposItems;
    }

    getDetailItemRepository(itemData: any) {
        if (itemData !== '') {
            this.router.navigate([`detail-repository/${itemData.owner.login}/${itemData.name}`]);
        }
    }
}
