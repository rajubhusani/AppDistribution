import { Component, NgModule } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './download.html'
})
export class DownloadComponent {
  title = 'AppDistribution';
  selectedPlatform: string = "Android";
  buildUrl : string = "https://172.20.219.72/BuildsData/builds/app-release.apk";
  platforms = [
    'Android',
    'iOS'
  ];
  constructor(
    private router: Router){
  }

  radioChange(event: MatRadioChange){
    console.log(event.value); 
    this.selectedPlatform = event.value;
    if(event.value === 'Android'){
      this.buildUrl = "https://172.20.219.72/BuildsData/builds/app-release.apk";
    }else  if(event.value === 'iOS'){
      this.buildUrl = "itms-services://?action=download-manifest&amp;url=https://172.20.219.72/BuildsData/builds/application.plist";
    }   
    console.log(this.buildUrl); 
  }

  downloadBuild(){
    console.log(this.buildUrl); 
    window.location.href = this.buildUrl;
  }

  moveToHistory(){
    this.router.navigate(['/history'], { queryParams: { platform: this.selectedPlatform } } );
  }
}
