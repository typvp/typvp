import React, {FC, useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'
import {useHistory} from 'react-router'
import TimeAgo from 'timeago-react'
import {useQuery} from 'urql'

import {useStore} from '@/stores'
import {
  ProfileGrid,
  ProfileHeader,
  ProfileValue,
  AboutArea,
  ResultsArea,
  ResultWrapper,
  ResultHeader,
  ResultValue,
} from '@/styled/MyProfile'
import {MY_RESULTS} from '@/graphql/queries/me'

const MyProfile: FC = observer(() => {
  const {UserStore} = useStore()
  const history = useHistory()
  const [pagination, setPagination] = useState({first: 15, skip: 0})
  const [result] = useQuery({
    query: MY_RESULTS,
    variables: {
      ...pagination,
    },
  })

  if (UserStore.me === undefined && !UserStore.fetchingUser) {
    history.push('/login')
  }

  useEffect(() => {
    if (result.data) UserStore.me!.results = result.data.myResults
  }, [result.data])

  return (
    <ProfileGrid>
      {UserStore.me && (
        <>
          <AboutArea>
            <p>
              <ProfileHeader>username</ProfileHeader>
              <ProfileValue>{UserStore.me.username}</ProfileValue>
            </p>
            <p>
              <ProfileHeader>last seen</ProfileHeader>
              <ProfileValue>
                {UserStore.me.lastSeen ? (
                  <TimeAgo datetime={UserStore.me.lastSeen} />
                ) : (
                  'n/a'
                )}
              </ProfileValue>
            </p>
            <p>
              <ProfileHeader>last played</ProfileHeader>
              <ProfileValue>{UserStore.me.lastPlayed || 'n/a'}</ProfileValue>
            </p>
          </AboutArea>
          <ResultsArea>
            {UserStore.me.results &&
              UserStore.me.results.map((result: any) => (
                <ResultWrapper key={result.id}>
                  <p>
                    {result.type} | <TimeAgo datetime={result.createdAt} />
                  </p>
                  <ResultHeader>wpm</ResultHeader>
                  <ResultValue>{result.wpm}</ResultValue>
                  <ResultHeader>cpm</ResultHeader>
                  <ResultValue>{result.cpm}</ResultValue>
                  <ResultHeader>cpm(raw)</ResultHeader>
                  <ResultValue>{result.rawCpm}</ResultValue>
                  <ResultHeader>corr</ResultHeader>
                  <ResultValue>{result.correct}</ResultValue>
                  <ResultHeader>incorr</ResultHeader>
                  <ResultValue>{result.incorrect}</ResultValue>
                  <ResultHeader>crrns</ResultHeader>
                  <ResultValue>{result.corrections}</ResultValue>
                  <ResultHeader>cmpltns</ResultHeader>
                  <ResultValue>{result.wordIndex}</ResultValue>
                </ResultWrapper>
              ))}
          </ResultsArea>
        </>
      )}
    </ProfileGrid>
  )
})

export default MyProfile
