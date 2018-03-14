import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {TraineesService} from '../trainees.service';
import {ITestResult} from '../itest-result';
import {FormControl} from '@angular/forms';
import {Ecourses} from '../ecourses.enum';

import {Store} from '@ngrx/store';
import * as fromRoot from './../../reducers';
import * as StudentAction from './../../actions/student.actions';

@Component({
    selector: 'art-student-edit',
    templateUrl: './student-edit.component.html',
    styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

    id: number;
    ecourses$: Ecourses;
    studentDetails$ = null;
    subjects$: Array<string> = Object.keys(Ecourses);
    isEditMode: boolean;
    date = new FormControl(new Date());

    constructor(private traineesSrv: TraineesService, private router: Router,
                private route: ActivatedRoute, private store: Store<fromRoot.State>) {
        this.isEditMode = (this.route.snapshot.data && this.route.snapshot.data.isEditMode) || true;
    }

    ngOnInit() {
        this.subjects$ = this.subjects$.slice(this.subjects$.length / 2);
        this.route.params.subscribe((parm: Params) => {
            this.id = +parm['id'];
            if (this.id) {
                this.traineesSrv.getStudentDetails(this.id).subscribe((res) => {
                    this.studentDetails$ = res;
                    this.date = new FormControl(new Date(res.Date));
                });

                // this.studentDetails$ = this.store.select((state) => {
                //     return state.students.data.find(item => item.Id === this.id);
                // });
            } else {
                this.studentDetails$ = this.traineesSrv.getEmptyStudentDetail();
            }

            this.traineesSrv.clicked$.subscribe((val) => {
                this.store.dispatch(new StudentAction.AddStudents([this.studentDetails$]));
            });
        });


    }

}
