import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Tweet } from './model'
import { User } from '../../../../../server/src/passport'

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>('/api/user')
  }

  getTweets(): Observable<Tweet[]> {
    return this.http.get<Tweet[]>('/api/tweets')
  }

}
