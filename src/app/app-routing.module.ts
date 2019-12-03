import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListInfoGitHubComponent } from './list-info-git-hub/list-info-git-hub.component';
import { DetailRepositoryComponent } from './detail-repository/detail-repository.component';
import { ApiResolverService } from './services/resolver/api-resolver.service';
import { DetailRepositoryResolverService } from './services/resolver/detail-repository-resolver.service';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'list-infos-git-hub/:userId',
        component: ListInfoGitHubComponent,
        resolve: {
            resolverData: ApiResolverService
        }, 
        canActivate: [
            AuthGuardService
        ]
    },
    {
        path: 'detail-repository/:owner/:name',
        component: DetailRepositoryComponent,
        resolve: {
            resolverData: DetailRepositoryResolverService
        }
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
