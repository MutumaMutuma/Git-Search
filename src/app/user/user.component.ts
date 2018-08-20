import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Git } from '../git';
import { GitsearchRequestService } from '../gitsearch-http/gitsearch-request.service';
import { findNode } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers:[GitsearchRequestService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  git: Git;
  name:string;
constructor(public http:HttpClient, public gitService:GitsearchRequestService){

}
    ngOnInit() {
      this.gitService.gitsearchRequestService();
      this.git=this.gitService.git
      
   
    }
    
  }