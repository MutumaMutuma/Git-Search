import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserService} from '../users/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username :any;
  repos: any;
  
    constructor(private gitApiService:UserService) {
  this.gitApiService.getUserInfo().subscribe(userPage=>{
    console.log(userPage);
    this.username=userPage;
  });
  
  this.gitApiService.getUserRepos().subscribe(repos=>{
    console.log(repos);
    this.repos=repos;
  
  
  });
     }
  
    ngOnInit() {
    }
  
  }