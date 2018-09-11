import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import {DataService} from '../service/dataservice';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';

export interface BuildsHistory {
    version: string;
    releaseDate: string;
    releaseNotes: string;
    url: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './history.html'
})

export class HistoryComponent implements OnInit{
    selectedPlatform: string;
    displayedColumns: string[] = ['version', 'releaseDate', 'releaseNotes'];
    dataSource :  any;
    constructor(private router: Router, private route: ActivatedRoute, private service: DataService) {
        this.selectedPlatform = route.snapshot.queryParams['platform'];  
        this.dataSource = new BuildSource(this.service, this.selectedPlatform);      
    }

    @ViewChild(MatPaginator) paginator: MatPaginator;
    ngOnInit() {
        this.dataSource.paginator = this.paginator;
    }

    moveToHome() {
        this.router.navigate(['/']);
    }
}

export class BuildSource extends DataSource<any>{

    constructor(private service: DataService, private platform: string){
        super();
    }

    connect() : Observable<BuildsHistory[]> {
        if (this.platform === 'Android') {
            return this.service.getAndroidBuildsHistory();
        }else{
            return this.service.getiOSBuildsHistory();
        }
        
    }

    disconnect(){

    }

}