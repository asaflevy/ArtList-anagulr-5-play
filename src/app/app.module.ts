import {BrowserModule} from '@angular/platform-browser';
import {MomentModule} from 'angular2-moment';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import {reducers} from './reducers';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {TraineesComponent} from './trainees/trainees.component';
import {KeyValuePipe} from './shared/keys.pipe';
import {AppRoutingModule} from './app-routing.module';
import {TraineesStartComponent} from './trainees/trainees-start/trainees-start.component';
import {StudentResultComponent} from './trainees/student-result/student-result.component';
import {StudentEditComponent} from './trainees/student-edit/student-edit.component';
import {TraineesService} from './trainees/trainees.service';
import {AboutComponent} from './about/about.component';
import {TestTraineesService} from './trainees/Testtrainees.service';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        KeyValuePipe,
        TraineesStartComponent,
        StudentResultComponent,
        StudentEditComponent,
        TraineesComponent,
        AboutComponent
    ],
    imports: [
        MomentModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MaterialModule,
        HttpModule,
        HttpClientModule,
        AppRoutingModule,
        StoreModule.forRoot(reducers)
    ],
    providers: [TraineesService, TestTraineesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
