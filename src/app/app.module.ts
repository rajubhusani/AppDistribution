import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HistoryComponent } from './components/history';
import { DownloadComponent } from './components/download';
import {AddNewComponent} from './components/addnew';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes, Router } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent } from './components/dashboard';
import {FormBuilder} from '@angular/forms';

const appRoutes: Routes = [
  { path: '',  component: DashboardComponent },
  { path: 'history', component: HistoryComponent },
  {path:'addnew', component: AddNewComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    DownloadComponent,
    DashboardComponent,
    AddNewComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
