import {ITestResult} from '../trainees/itest-result';

import * as fromStudents from '../actions/student.actions';

// Properties of the Students Collection in store
export interface StudentState {
    data: ITestResult[];
    filter: '';
    loaded: boolean;
    loading: boolean;

}

// Initial Students Collection values
export const initialStudentStateState: StudentState = {
    data: [],
    filter: '',
    loaded: false,
    loading: false,
};

export function reducer(state = initialStudentStateState,
                        action: fromStudents.StudentActions): StudentState {
    switch (action.type) {

        case fromStudents.LOAD_STUDENTS: {
            return {
                ...state,
                loading: true
            };
        }

        case fromStudents.LOAD_STUDENTS_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loaded: true,
                loading: false,
            };
        }

        case fromStudents.ADD_STUDENTS: {
            const data = [...state.data, action.payload[0]];
            return {...state, data: data};
        }

        case fromStudents.FILTER_STUDENTS: {
            return {
                ...state,
                data: action.payload,
            };
        }

    }

    return state;
}

function testStudent(): ITestResult[] {
    return [
        // Demo data
        {
            'Id': 2,
            'Name': 'Test Name',
            'Date': '1220927122294',
            'Grade': 98,
            'Subject': 3
        },

        {
            'Id': 1,
            'Name': 'Asaf Levy',
            'Date': '1520927122294',
            'Grade': 85,
            'Subject': 1
        }
    ];
}
