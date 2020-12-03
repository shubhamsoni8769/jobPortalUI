import { Injectable } from '@angular/core';
import { broadcastCVData } from '../Model/brodcastCVdata';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BrodcastCVService {
  public broadcastData:broadcastCVData;
  constructor(private http: HttpClient) { 

  }
  setBroadcastData(broadcastData:broadcastCVData){
    
    this.broadcastData=broadcastData;
    return this.http.post("https://soni-jobportal.herokuapp.com/register", this.broadcastData )
   
  }
}
