import * as fromStudent from './reducers/students.reducer';

export interface State {
    students: fromStudent.StudentState;
}

export const reducers = {
    students: fromStudent.reducer
}