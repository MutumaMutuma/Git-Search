import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Git } from '../git';
import { GitsearchRequestService } from '../gitsearch-http/gitsearch-request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
constructor(private http:HttpClient){
}
    ngOnInit() {
    }
  
  }