import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GitHubDashboardService {

    constructor(private httpClient: HttpClient) {
    }

    aGetReposByUser(user: any) {
        return this.httpClient.get('https://api.github.com/users/' + user + '/repos');
    }

    aGetInfoByUser(user: any) {
        return this.httpClient.get('https://api.github.com/users/' + user);
    }

    aGetReposByUserAndName(user: any, repos: any) {
        return this.httpClient.get('https://api.github.com/repos/' + user + '/' + repos);
    }
}
