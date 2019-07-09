import React, {FC, useEffect} from 'react'
import {observer} from 'mobx-react'

import {useStore} from '@/stores'
import SingleplayerMeta from '@/components/SingleplayerMeta'
import TypingArea from '@/components/TypingArea'
import {SingleplayerContainer} from '@/styled/Singleplayer'
import {TypingState} from '@/types/game'

const Singleplayer: FC = observer((props: any) => {
  const {GameStore} = useStore()

  useEffect(() => {
    GameStore.generateWords()
  }, [])

  return (
    <SingleplayerContainer>
      <SingleplayerMeta />
      <TypingArea />
      {GameStore.typingState === TypingState.Finished && (
        <>
          <span>cpm: {GameStore.cpm}</span>
          <span>wpm: {GameStore.wpm}</span>
          <span>correct: {GameStore.correct}</span>
          <span>incorrect: {GameStore.incorrect}</span>
          <span>corrections: {GameStore.corrections}</span>
        </>
      )}
    </SingleplayerContainer>
  )
})

export default Singleplayer
