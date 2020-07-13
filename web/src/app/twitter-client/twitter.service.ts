import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { User } from '../../../../server/src/passport'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>('/api/user')
  }

  getTweets(): Observable<any> {
    return this.http.get<any>('/api/tweets')
  }

}
