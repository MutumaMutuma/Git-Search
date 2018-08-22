import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Git } from '../git';
import {environment} from '../../environments/environment';
@Injectable()

export class GitsearchRequestService {
  git: Git;
  constructor(public http:HttpClient) { 
    this.git=new Git("","",12,"","","","2018-08-20",15);
  }
  gitsearchRequestService() { // To hold interface API response
    interface ApiResponse{ 
      login:string;
      avatar_url:string;
      location:string;
      bio:string;
      name:string;
      followers:number;
    }

    let promise =new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>('https://api.github.com/users/MutumaMutuma?'+'access_token=87c756cf3622c0cbdafdb05f62f619c7a83a9629').toPromise().then(response=>{
        this.git.name=response.login
        this.git.avatar_url=response.avatar_url
        this.git.location=response.location
        this.git.bio = response.bio
        this.git.login = response.login
        console.log(response)
        resolve()
        },
        error => {
          console.log("You have an error")
        }

     )
    })
    return promise;
  }
  
}
