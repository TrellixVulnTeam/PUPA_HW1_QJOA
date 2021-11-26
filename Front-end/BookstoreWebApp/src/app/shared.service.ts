import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl = "http//127.0.0.1:8000/books/"

  constructor(private http:HttpClient) { }

  getBooklist():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl);
  }
  addBooklist(val:any){
    return this.http.post(this.APIUrl, val);
  }
  updateBooklist(val:any){
    return this.http.put(this.APIUrl, val);
  }
  deleteBooklist(val:any){
    return this.http.delete(this.APIUrl + val);
  }

  getAllBooknames():Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl);
  }
}
