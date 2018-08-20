import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Git } from '../git';
@Injectable({
  providedIn: 'root'
})
export class GitsearchRequestService {
  git: Git;
  constructor(private http:HttpClient) { 
    
  }
  
  
}
