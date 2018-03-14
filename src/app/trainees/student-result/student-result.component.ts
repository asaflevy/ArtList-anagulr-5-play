import {Component, ViewChild, OnInit, Input} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {TraineesService} from '../trainees.service';
import {ITestResult} from '../itest-result';
import {Ecourses} from '../ecourses.enum';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';


@Component({
    selector: 'art-student-result',
    templateUrl: './student-result.component.html',
    styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {
    @Input()
    studentResultInput;

    studentResultDataSource;
    displayedColumns = ['Id', 'Name', 'Date', 'Grade', 'Subject'];
    selectedRowIndex = 0;

    constructor(private traineesSrv: TraineesService, private router: Router, private route: ActivatedRoute) {
    }


    ngOnInit() {
        this.studentResultDataSource = new MatTableDataSource<ITestResult>(this.studentResultInput);
    }

    applyFilter(filterValue: string) {

        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
        this.studentResultDataSource.filter = filterValue;
    }


    getSubject(subject: Ecourses) {
        return Ecourses[subject];
    }

    onStudentSelected(studend: ITestResult) {
        this.traineesSrv.studendSelected.emit(studend);
        this.selectedRowIndex = studend.Id;
        this.router.navigate(['/trainee', studend.Id]);
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;

    /**
     * Set the paginator after the view init since this component will
     * be able to query its view for the initialized paginator.
     */
    ngAfterViewInit() {
      this.studentResultDataSource.paginator = this.paginator;
    }
}

