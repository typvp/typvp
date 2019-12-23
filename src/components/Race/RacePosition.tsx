import React, {FC} from 'react'
import {observer} from 'mobx-react-lite'
import styled from 'styled-components'

import {useStore} from '@/stores'

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF']

const PlayerContainer = styled.div`
  display: flex;
  align-self: center;
  max-width: 900px;
  width: 900px;
`

const PlayerList = styled.ul`
  ::before {
    content: '';
    display: block;
    width: 900px;
    position: absolute;
    height: 32px;
    top: 0;
    left: 0;
    border-radius: 4px;
    background: ${({theme}) => theme.backgrounds.secondary};
  }
  transition: 1.1s all linear;
  position: relative;
  padding: 0;
  list-style: none;
`

const PlayerBar = styled.li`
  height: 32px;
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  padding-left: 1em;
  color: white;
  border-radius: 4px;
  transition: 1.1s all linear;
  position: relative;
`

const RacePosition: FC = observer(({id}: any) => {
  const {RaceStore} = useStore()

  return (
    <PlayerContainer>
      <PlayerList
        style={{
          width: `${100 - (RaceStore.room!.secondsRemaining / 60) * 100}%`,
        }}
      >
        {RaceStore.room!.players.map((player: any, idx: any) => (
          <PlayerBar
            style={{
              background: `${colors[idx]}`,
              width: `${(player.wpm / RaceStore.fastestPlayer) * 100}%`,
            }}
            key={player.id}
          >
            <span>
              {' '}
              {player.wpm}
              {player.id === id && ' (you)'}
            </span>
          </PlayerBar>
        ))}
      </PlayerList>
    </PlayerContainer>
  )
})

export default RacePosition
