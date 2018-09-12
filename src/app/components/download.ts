import { Component, NgModule } from '@angular/core';
import { MatRadioChange } from '@angular/material';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {DataService} from '../service/dataservice';

export interface CurrentBuild {
  androidVersion: string;
  iosVersion: string;
  androidReleaseNotes: string;
  iosReleaseNotes: string;
  androidUrl: string;
  iosUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './download.html'
})
export class DownloadComponent {
  title = 'AppDistribution';
  selectedPlatform: string = "Android";
  currentVersion : string;
  releaseNotes : string;
  versionData : any;
  buildUrl : string = "https://172.20.219.72/BuildsData/builds/app-release.apk";
  platforms = [
    'Android',
    'iOS'
  ];
  constructor(
    private router: Router, private service: DataService){
      this.getCurrentVersion().subscribe(data =>{
        this.versionData = data;   
        this.currentVersion = data.androidVersion
        this.releaseNotes = data.androidReleaseNotes  
        this.buildUrl = data.androidUrl   
      });      
  }

  radioChange(event: MatRadioChange){
    console.log(event.value); 
    this.selectedPlatform = event.value;
    if(event.value === 'Android'){
      this.currentVersion = this.versionData.androidVersion
      this.releaseNotes = this.versionData.androidReleaseNotes
      this.buildUrl = this.versionData.androidUrl
    }else  if(event.value === 'iOS'){      
      this.currentVersion = this.versionData.iosVersion
      this.releaseNotes = this.versionData.iosReleaseNotes
      // this.buildUrl = "itms-services://?action=download-manifest&amp;url=https://172.20.219.72/BuildsData/builds/application.plist";
      this.buildUrl = this.versionData.iosUrl
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

  getCurrentVersion() : Observable<CurrentBuild>{
      return this.service.getCurrentVersion();
  }
}
