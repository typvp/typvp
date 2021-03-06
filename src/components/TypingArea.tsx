import React, {FC, useRef, useEffect} from 'react'
import {observer} from 'mobx-react-lite'

import {useStore} from '@/stores'
import Word from '@/components/Word'
import {TypingAreaContainer, TypingAreaInner} from '@/styled/TypingArea'
import {SkeletonLine} from '@/styled/Skeleton'
import {Input} from '@/styled/TextInput'

const getWordType = (a: number, b: number) => {
  if (a < b) return 'done'
  if (a === b) return 'current'
  return 'awaiting'
}

interface ITypingArea {
  isGameOver: boolean
}

const TypingArea: FC<ITypingArea> = observer(props => {
  const wordsRef = useRef<null | HTMLDivElement>(null)
  const inputRef = useRef<null | HTMLInputElement>(null)

  const {GameStore} = useStore()

  useEffect(() => {
    if (wordsRef.current !== null && GameStore.words.length > 0) {
      wordsRef.current!.children[GameStore.wordIndex].scrollIntoView(true)
    }
  }, [GameStore.wordIndex, GameStore.words])

  useEffect(() => {
    if (inputRef.current !== null) {
      GameStore.inputRef = inputRef
    }
  }, [inputRef])

  return (
    <TypingAreaContainer>
      <TypingAreaInner
        ref={wordsRef}
        style={{height: '75px', overflow: 'hidden'}}
        disabled={props.isGameOver}
      >
        {GameStore.fetchingWords ? (
          <SkeletonLine />
        ) : (
          <>
            {GameStore.words.map((word: string, i: number) => (
              <Word
                isMatch={GameStore.typedHistory[i] === GameStore.words[i]}
                word={word}
                key={`${word}-${i}`}
                variant={getWordType(i, GameStore.wordIndex)}
              />
            ))}
          </>
        )}
      </TypingAreaInner>
      <Input
        ref={inputRef}
        hasWarning={GameStore.isSpellingIncorrect}
        disabled={props.isGameOver}
        value={GameStore.typedWord}
        onChange={e => GameStore.onKeyDown(e)}
        onKeyDown={e => GameStore.onAction(e)}
        aria-label="Text Input"
        autoFocus={true}
      />
    </TypingAreaContainer>
  )
})

export default TypingArea
