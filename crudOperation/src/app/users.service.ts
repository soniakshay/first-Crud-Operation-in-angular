import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './User';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  getData(): Observable<Users[]> {
    return this.http.get<Users[]>('http://localhost:8001/user/');
  }
  removeData(id: string): Observable<Users>{
    console.log(id);
    return this.http.delete<Users>('http://localhost:8001/user/' + id );
  }
  getRecord(id: string): Observable<Users> {
    console.log(id);
    return this.http.get<Users>('http://localhost:8001/user/' +  id );
  }
  updatadata(user: Users,id: string):Observable<Users>{
    return this.http.put<Users>('http://localhost:8001/user/' + id, user);
  }
}
