import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GitHubDashboardService {
    baseUrl = 'https://api.github.com';
    constructor(private httpClient: HttpClient) {
    }

    aGetReposByUser(user: any) {
        return this.httpClient.get(`${this.baseUrl}/users/${user}/repos`);
    }

    aGetInfoByUser(user: any) {
        return this.httpClient.get(`${this.baseUrl}/users/${user}`);
    }

    aGetReposByUserAndName(user: any, repos: any) {
        return this.httpClient.get(`${this.baseUrl}/repos/${user}/${repos}`);
    }
}
