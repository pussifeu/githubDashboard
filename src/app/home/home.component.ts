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
        if (this.value.username !== '') {
            this.router.navigate([`list-infos-git-hub/${this.value.username}`]);
        }
    }

}
