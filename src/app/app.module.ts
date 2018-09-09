import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HistoryComponent } from './components/history';
import { DownloadComponent } from './components/download';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './modules/app.material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes, Router } from '@angular/router';

const appRoutes: Routes = [
  { path: '',  component: DownloadComponent },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HistoryComponent,
    DownloadComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    RouterModule
  ]
})
export class AppModule { }
