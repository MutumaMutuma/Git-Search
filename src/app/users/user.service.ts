import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userName:string;
  private apiKey: string= environment.clientSecret;
    constructor(public http: HttpClient) {
  console.log('service is ready');
  this.userName='MutumaMutuma';
  
    }
  
    getUserInfo(){
      return this.http.get("https://api.github.com/users/" + this.userName + "?access_token=" + this.apiKey)
    }
  getUserRepos(){
    return this.http.get("https://api.github.com/users/" + this.userName + "/repos?access_token=" + this.apiKey)
  
  }
  
  }