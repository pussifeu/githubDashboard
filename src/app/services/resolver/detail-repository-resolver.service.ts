import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GitHubDashboardService } from '../git-hub-dashboard.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DetailRepositoryResolverService implements Resolve<any>{

  constructor(private gitHubDashboardService: GitHubDashboardService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.gitHubDashboardService
      .aGetReposByUserAndName(route.paramMap.get('owner'), route.paramMap.get('name'));
  }
}
