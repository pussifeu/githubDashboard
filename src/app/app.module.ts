import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {MatMenuModule} from '@angular/material/menu';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
    MatIconModule, MatButtonModule, MatSidenavModule,
    MatToolbarModule, MatInputModule, MatListModule, MatCardModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import {InputSearchComponent} from './input-search/input-search.component';
import {ListInfoGitHubComponent} from './list-info-git-hub/list-info-git-hub.component';
import {HomeComponent} from './home/home.component';
import {DetailRepositoryComponent} from './detail-repository/detail-repository.component';
import { LoginComponent } from './login/login.component';


@NgModule({
    declarations: [
        AppComponent,
        InputSearchComponent,
        ListInfoGitHubComponent,
        HomeComponent,
        DetailRepositoryComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatMenuModule,
        Ng2SearchPipeModule,
        FlexLayoutModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        MatToolbarModule,
        MatInputModule,
        MatListModule,
        MatCardModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
