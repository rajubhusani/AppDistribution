import { Component, NgModule } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.html'
})
export class DashboardComponent {

    constructor(private router: Router){

    }

    launchAddNew(){
        this.router.navigate(["/addnew"]);
    }

}