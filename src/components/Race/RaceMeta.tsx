import React, {FC} from 'react'
import {observer} from 'mobx-react-lite'

import {useStore} from '@/stores'
import {MetaContainer, MetaTimer} from '@/styled/Singleplayer'
import {colors} from '@/styled/Theme'

const colorCountdownMap: any = {
  5: colors.r300,
  4: colors.y300,
  3: colors.y200,
  2: colors.y100,
  1: colors.g300,
  0: '',
}

const RaceMeta: FC<{color?: string}> = observer(({color}) => {
  const {RaceStore} = useStore()

  return (
    <>
      <MetaContainer
        style={{
          backgroundColor: `${colorCountdownMap[RaceStore.room!.countdown]}`,
        }}
      >
        <MetaTimer
          style={{
            width: `${(RaceStore.room!.secondsRemaining / 60) * 100}%`,
            background: color,
          }}
        />
        {RaceStore.room!.state === 'STARTING' && (
          <span>Starting In... {RaceStore.room!.countdown}</span>
        )}
        {RaceStore.room!.state === 'WAITING' && (
          <span>Waiting for players</span>
        )}
        {RaceStore.room!.state === 'IN_PROGRESS' && (
          <span>Time Left: {RaceStore.room!.secondsRemaining}s</span>
        )}
        {RaceStore.room!.state === 'FINISHED' && <span>Race Complete!</span>}
      </MetaContainer>
    </>
  )
})

export default RaceMeta
