import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailRepositoryComponent} from './detail-repository.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

describe('DetailRepositoryComponent', () => {
    let component: DetailRepositoryComponent;
    let fixture: ComponentFixture<DetailRepositoryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DetailRepositoryComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            imports: [
                RouterModule.forRoot([]),
                HttpClientModule
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DetailRepositoryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
