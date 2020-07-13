import { Component, OnInit } from '@angular/core';
import { TwitterService } from './twitter.service'
import { Observable } from 'rxjs'
import { User } from '../../../../server/src/passport'

@Component({
  selector: 'app-twitter-client',
  templateUrl: './twitter-client.component.html',
  styleUrls: ['./twitter-client.component.scss']
})
export class TwitterClientComponent implements OnInit {
  
  user$: Observable<User>
  tweets$: Observable<any>

  constructor(private twitterService: TwitterService) { }

  ngOnInit(): void {
    this.user$ = this.twitterService.getUser()
    this.tweets$ = this.twitterService.getTweets()
  }

}
