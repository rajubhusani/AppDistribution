import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator, MatTableDataSource} from '@angular/material';

export interface VersionElement {
    version: string;
    releaseDate: string;
    releaseNotes: string;
    url: string;
}

const ELEMENT_DATA: VersionElement[] = [
    { version: '1.0(1)', releaseDate: "10 Aug 2018", releaseNotes: 'Release 1', url: "https://172.20.219.72/builds/app-release.apk" },
    { version: '1.0(2)', releaseDate: "11 Aug 2018", releaseNotes: 'Release 2', url: "https://172.20.219.72/builds/app-release.apk"  },
    { version: '1.0(3)', releaseDate: "12 Aug 2018", releaseNotes: 'Release 3', url: "https://172.20.219.72/builds/app-release.apk"  },
    { version: '1.0(4)', releaseDate: "13 Aug 2018", releaseNotes: 'Release 4', url: "https://172.20.219.72/builds/app-release.apk"  },
    { version: '1.0(5)', releaseDate: "14 Aug 2018", releaseNotes: 'Release 5', url: "https://172.20.219.72/builds/app-release.apk"  },
    { version: '1.0(6)', releaseDate: "15 Aug 2018", releaseNotes: 'Release 6', url: "https://172.20.219.72/builds/app-release.apk"  },
    { version: '1.0(7)', releaseDate: "16 Aug 2018", releaseNotes: 'Release 7', url: "https://172.20.219.72/builds/app-release.apk"  },
    { version: '1.0(8)', releaseDate: "17 Aug 2018", releaseNotes: 'Release 8', url: "https://172.20.219.72/builds/app-release.apk"  },
    { version: '1.0(9)', releaseDate: "18 Aug 2018", releaseNotes: 'Release 9', url: "https://172.20.219.72/builds/app-release.apk"  },
    { version: '1.0(10)', releaseDate: "19 Aug 2018", releaseNotes: 'Release 10', url: "https://172.20.219.72/builds/app-release.apk"  },
];

@Component({
    selector: 'app-root',
    templateUrl: './history.html'
})

export class HistoryComponent {
    constructor(private router: Router) {
    }
    displayedColumns: string[] = [ 'version', 'releaseDate', 'releaseNotes'];
    dataSource = new MatTableDataSource<VersionElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  moveToHome(){
      this.router.navigate(['/']);
  }
}