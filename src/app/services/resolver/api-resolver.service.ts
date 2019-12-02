import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin, } from 'rxjs';
import { GitHubDashboardService } from '../git-hub-dashboard.service';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/models/userModel';

@Injectable({
  providedIn: 'root'
})
export class ApiResolverService implements Resolve<Array<any>>{
  constructor(private gitHubDashboardService: GitHubDashboardService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<any> {
    return forkJoin([
      this.gitHubDashboardService.aGetInfoByUser(route.paramMap.get('userId')),
      this.gitHubDashboardService.aGetReposByUser(route.paramMap.get('userId'))
    ]).pipe(map((allResponses) => {
      return {
        userInfos: this.formatData(allResponses[0]),
        reposItems: allResponses[1]
      };
    }));
  }

  private formatData(params: any) {
    return params;
  }
}
