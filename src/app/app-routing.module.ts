import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {StudentEditComponent} from './trainees/student-edit/student-edit.component';
import {TraineesComponent} from './trainees/trainees.component';
import {TraineesStartComponent} from './trainees/trainees-start/trainees-start.component';
import {AboutComponent} from './about/about.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/trainee', pathMatch: 'full'},
    {
        path: 'trainee', component: TraineesComponent, children: [
        {path: '', component: TraineesStartComponent},
        {path: ':id', component: StudentEditComponent, data: {'isEditMode': false}},
        {path: 'new', component: StudentEditComponent, data: {'isEditMode': true}},
        {path: ':id/edit', component: StudentEditComponent},
    ]
    },
    {path: 'about', component: AboutComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
