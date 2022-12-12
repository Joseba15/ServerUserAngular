import { Injectable } from '@angular/core';
import { Server } from '../interfaces/servers';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/users';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  
  private url:string= 'http://localhost:3000/users';


  private _servers = [
    {
    id: 1,
    name: 'Productionserver',
    status: 'online'
    },
    {
    id: 2,
    name: 'Testserver',
    status: 'offline'
    },
    {
    id: 3,
    name: 'Devserver',
    status: 'offline'
    }
    ]

  constructor(private http:HttpClient) { }

  get servers(): Server[] {

    return [...this._servers];
  }

  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.url)  
  }

  getUser(id:number):Observable<User>{
    return this.http.get<User>(this.url+'/'+id)  
  }

}
