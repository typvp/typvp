import gql from 'graphql-tag'

import {AccountFragmentWithResults, ResultFragment} from '@/graphql/fragments'

export const ME = gql`
  query me {
    me {
      ...AccountResultsFragment
      confirmed
    }
  }
  ${AccountFragmentWithResults}
`

export const MY_RESULTS = gql`
  query myResults($first: Int!, $skip: Int!, $date: String, $type: String) {
    myResults(filter: {first: $first, skip: $skip, date: $date, type: $type}) {
      allTestCount
      filteredTestCount
      results {
        ...ResultFragment
      }
    }
  }
  ${ResultFragment}
`

export const MY_TRIALS = gql`
  query myTrials {
    myTrials {
      name
      id
      difficulty
      minWordLength
      maxWordLength
      custom
      private
    }
  }
`
