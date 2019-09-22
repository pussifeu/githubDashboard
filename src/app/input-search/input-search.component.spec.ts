import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {InputSearchComponent} from './input-search.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('InputSearchComponent', () => {
    let component: InputSearchComponent;
    let fixture: ComponentFixture<InputSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InputSearchComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
