import {Component, OnInit, ViewChild} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {TraineesService} from './trainees.service';
import {StudentResultComponent} from './student-result/student-result.component';
import {Observable} from 'rxjs/Observable';
import {ITestResult} from './itest-result';

import {Store} from '@ngrx/store';
import * as fromRoot from './../reducers';
import * as StudentAction from '../actions/student.actions';


@Component({
    selector: 'art-trainees',
    templateUrl: './trainees.component.html',
    styleUrls: ['./trainees.component.css'],
    providers: [TraineesService]
})
export class TraineesComponent implements OnInit {

    current_filter: string;
    studentResult;

    constructor(private router: Router, private route: ActivatedRoute,
                private traineesSrv: TraineesService, private store: Store<fromRoot.State>) {
        this.studentResult = store.select((state) => {
            return state.students.data;
        });
    }

    @ViewChild(StudentResultComponent) child: StudentResultComponent;

    ngOnInit() {
        this.traineesSrv.getStudentResult().subscribe((data) => {
            this.store.dispatch(new StudentAction.LoadStudentsSucsses(data));
        });
    }

    onNewTestResult() {
        this.router.navigate(['new'], {relativeTo: this.route});
        this.traineesSrv.declareClick('new');
    }
}
