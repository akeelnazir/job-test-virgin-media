import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store'

import { User } from '../../../../server/src/passport'
import { State as TweetsState } from './state'
import { loadTweets, sortByKey } from './state/actions'
import * as tweetsSelectors from './state/selectors'
import { TwitterService } from './state/twitter.service'
import { Tweet } from './state/model'

@Component({
  selector: 'app-twitter-client',
  templateUrl: './twitter-client.component.html',
  styleUrls: ['./twitter-client.component.scss']
})
export class TwitterClientComponent implements OnInit {

  user$: Observable<User>
  tweets$: Observable<Tweet[]>

  constructor (private store: Store<TweetsState>, private service: TwitterService) {
    this.store.dispatch(loadTweets())
  }

  ngOnInit (): void {
    this.user$ = this.service.getUser()
    this.tweets$ = this.store.select(tweetsSelectors.getAllTweets)
  }

  sortByKey (key: string) {
    key && this.store.dispatch(sortByKey({ key }))
  }
}
