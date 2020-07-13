import { createReducer, on } from '@ngrx/store'

import { initialState } from './'
import * as TweetsActions from './actions'

export const reducer = createReducer(
  initialState,

  on(TweetsActions.loadTweets, state => ({ ...state, loading: true })),

  on(TweetsActions.loadTweetsSuccess, (state, action) => ({
    ...state,
    tweets: action.tweets,
    loading: false,
    error: null
  })),

  on(TweetsActions.sortByKey, (state, action) => {
    const tweets = [...state.tweets]
    const sortByKey = key => (a, b) => a[key] > b[key] ? 1 : -1
    tweets.sort(sortByKey(action.key))

    return {
      ...state,
      tweets
    }
  }),

  on(TweetsActions.loadTweetsFailure, (state, action) => ({ ...state, error: action.error })),
)
