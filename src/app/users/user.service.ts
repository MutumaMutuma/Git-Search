import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class UserService {
private username:string;
private clientid = '15cd6950f44b4a55184f';
private clientsecret = '93ecf4793d399be285521596f16dfc9950680c66';
  constructor(private http: HttpClientModule) { }
} 
