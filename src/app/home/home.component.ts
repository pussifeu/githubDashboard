import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    value: any;

    ngOnInit() {
    }

    constructor(private router: Router) {
        this.value = '';
    }

    displayResults(event: any) {
        this.value = event;
        const navigationExtras = {
            queryParams: {
                username: this.value.username,
                parent_page: 'home'
            }
        };
        if (this.value.username !== '') {
            this.router.navigate(['list-infos-git-hub'], navigationExtras);
        }
    }

}
