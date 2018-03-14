import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/publishReplay';
import {ITestResult} from './itest-result';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Injectable()
export class TraineesService {
    private studentSubject = new Subject<ITestResult>();
    student: Array<ITestResult> = [];
    StudentState = this.studentSubject.asObservable();
    _studentResult: Observable<Array<ITestResult>>;
    studendSelected = new EventEmitter<ITestResult>();
    private clickedSource = new Subject<string>();
    clicked$ = this.clickedSource.asObservable();

    constructor(private http: HttpClient) {
    }


    getStudentResult(): Observable<Array<ITestResult>> {
        if (!this._studentResult) {
            this._studentResult = this.http.get('http://localhost:4200/assets/student-data.json')
                .map((res: Response) => res['studentResult'])
                .publishReplay(1)
                .refCount();
        }
        return this._studentResult;
    }


    getStudentDetails(id: number) {
        return this.getStudentResult().map((studentResult) => {
            return studentResult.find(item => item.Id === id);
        });
    }

    getEmptyStudentDetail(): ITestResult {
        return {Id: 0, Name: '', Grade: 0, Subject: 1};
    }

    addStudentDetails(student: ITestResult) {
    }

    declareClick(value: string) {
        console.log('clicked', value);
        return this.clickedSource.next(value);
    }


}
