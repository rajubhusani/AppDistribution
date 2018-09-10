import { Component, NgModule } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './download.html'
})
export class DownloadComponent {
  title = 'AppDistribution';
  selectedPlatform: string;
  buildUrl : string = "https://172.20.219.72/builds/app-release.apk";

  constructor(
    private router: Router){
  }

  radioChange(event: MatRadioChange){
    console.log(event.value); 
    if(event.value === 'Android'){
      this.buildUrl = "https://172.20.219.72/builds/app-release.apk";
    }else  if(event.value === 'iOS'){
      this.buildUrl = "https://172.20.219.72/builds/app-release.ipa";
    }   
    console.log(this.buildUrl); 
  }

  downloadBuild(){
    console.log(this.buildUrl); 
    window.location.href = this.buildUrl;
  }

  moveToHistory(){
    this.router.navigate(['/history']);
  }
}
