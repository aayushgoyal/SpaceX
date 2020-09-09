import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LaunchProgramService {

  constructor(private http: HttpClient) {}

  getLaunchPrograms(api_params) {
      return this.http.get('https://api.spacexdata.com/v3/launches', {
        params: {
          "limit":100,
          ...api_params,
        }
      });
  }
}
