import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-input-search',
    templateUrl: './input-search.component.html',
    styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
    @Input() valueModel: any;
    @Output() clickSearchBtn: EventEmitter<string>;
    form = new FormGroup({
        username: new FormControl('', [Validators.required])
    });

    constructor() {
        this.clickSearchBtn = new EventEmitter<string>();
    }

    ngOnInit() {
    }

    searchFunction() {
        this.clickSearchBtn.emit(this.form.value);
    }

    getErrorMessage() {
        return 'You must enter a value';
    }
}
