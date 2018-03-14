import {Action} from 'rxjs/scheduler/Action';
import {ITestResult} from '../trainees/itest-result';

export const LOAD_STUDENTS = '[STUDENTS] Load Student';
export const ADD_STUDENTS = '[STUDENTS] Add Student';
export const LOAD_STUDENTS_SUCCESS = '[STUDENTS] Load Student Success';
export const FILTER_STUDENTS = '[STUDENTS] Filter Students';

export class LoadStudent {
    readonly type = LOAD_STUDENTS;
}

export class LoadStudentsSucsses {
    readonly type = LOAD_STUDENTS_SUCCESS;

    constructor(public payload: ITestResult[]) {
    }
}

export class AddStudents {
    readonly type = ADD_STUDENTS;

    constructor(public payload: ITestResult[]) {
    }
}


export class FilterStudents {
    readonly type = FILTER_STUDENTS;

    constructor(public payload: ITestResult[]) {
    }

}

export type StudentActions =
    LoadStudent
    | AddStudents
    | LoadStudentsSucsses
    | FilterStudents;

