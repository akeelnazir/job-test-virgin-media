import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, concatMap, map } from 'rxjs/operators'
import { of } from 'rxjs'

import { TwitterService } from './twitter.service'
import * as TweetsActions from './actions'

@Injectable()
export class Effects {

  constructor (
    private service: TwitterService,
    private actions$: Actions) {
  }

  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TweetsActions.loadTweets),
      concatMap(() => {
        return this.service.getTweets().pipe(
          map(tweets => TweetsActions.loadTweetsSuccess({ tweets })),
          catchError(error => of(TweetsActions.loadTweetsFailure({ error })))
        )
      })
    )
  })
}
