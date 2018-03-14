import {Ecourses} from './ecourses.enum';

export interface ITestResult {
    Id?: number;
    Name?: string;
    Date?: string;
    Grade?: number;
    Subject?: Ecourses;
}
