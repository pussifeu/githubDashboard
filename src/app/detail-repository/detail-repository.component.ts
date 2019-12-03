import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-detail-repository',
    templateUrl: './detail-repository.component.html',
    styleUrls: ['./detail-repository.component.scss']
})
export class DetailRepositoryComponent implements OnInit {
    oRepos: any;
    constructor(private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.oRepos = this.activatedRoute.snapshot.data.resolverData;
    }
}
