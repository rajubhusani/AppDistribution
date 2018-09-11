import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { BuildsHistory } from "../components/history";

const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };

@Injectable()
export class DataService{
    constructor(private http: HttpClient){
    }

    getAndroidBuildsHistory(): Observable<any>{
        return this.http.get<BuildsHistory[]>("https://172.20.219.72/BuildsData/androidbuilds.json", httpOptions);
    }

    getiOSBuildsHistory(): Observable<any>{
        return this.http.get<BuildsHistory[]>("https://172.20.219.72/BuildsData/iosbuilds.json", httpOptions);
    }

}