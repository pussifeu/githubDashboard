import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListInfoGitHubComponent } from './list-info-git-hub/list-info-git-hub.component';
import { DetailRepositoryComponent } from './detail-repository/detail-repository.component';
import { ApiResolverService } from './services/resolver/api-resolver.service';


const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'list-infos-git-hub/:userId',
        component: ListInfoGitHubComponent,
        resolve: {
            resolverData: ApiResolverService
        }
    },
    { path: 'detail-repository', component: DetailRepositoryComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
