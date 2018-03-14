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
export class TestTraineesService{
    _studentSubject: BehaviorSubject<ITestResult[]> = new BehaviorSubject([]);
    student: ITestResult = {};
    _studentResult: Observable<Array<ITestResult>>;
    studendSelected = new EventEmitter<ITestResult>();
    private clickedSource = new Subject<string>();
    clicked$ = this.clickedSource.asObservable();

    constructor(private http: HttpClient) {
    }

    get studentSubject() {
        return this._studentSubject.asObservable();
    }

    getStudentResult() {
        this.http.get('http://localhost:4200/assets/student-data.json')
            .subscribe((res: Response) => res['studentResult'].map((studentItem) => {
                return this._studentSubject.next(studentItem);
            }));
    }


    getStudentDetails(id: number) {
        return this.studentSubject.map((studentResult) => {
            return studentResult.find(item => item.Id === id);
        });
    }

    addStudentDetails(student: ITestResult) {
        this._studentSubject.next([student]);
    }

    declareClick(value: string) {
        console.log('clicked', value);
        return this.clickedSource.next(value);
    }


}
