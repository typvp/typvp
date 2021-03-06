import React, {useEffect, useState} from 'react'
import {observer} from 'mobx-react-lite'
import {useParams, useLocation} from 'react-router-dom'
import {AnimatePresence, motion} from 'framer-motion'

import {useStore} from '@/stores'
import {socket} from '@/helpers/socket'
import {
  RaceTypingArea,
  RacePosition,
  RaceMeta,
  RaceResult,
} from '@/components/Race'
import {TLobby} from '@/types/game'
import {SingleplayerContainer} from '@/styled/Singleplayer'
import {genGuestIdAndName} from '@/pages/Multiplayer/Lobbies'

const Race = observer(() => {
  const {id: lobbyId} = useParams()
  const location = useLocation()
  const {UserStore, RaceStore} = useStore()
  const [id, setId] = useState<{
    id: string | number
    name: string
    color?: string
  }>(location.state && location.state.id)
  const [sendData, setSendData] = useState(false)
  const [idComplete, setIdComplete] = useState(false)

  // Emit local cpm & reset sendData
  const sendRaceProgress = () => {
    socket.emit('race_progress', {wpm: RaceStore.derivewpm})
    setSendData(false)
  }

  useEffect(() => {
    if (!UserStore.fetchingUser) {
      if (UserStore.me) {
        console.debug('[Race] Found logged in user')
        setId({
          id: UserStore.me.id,
          name: UserStore.me.username,
          color: UserStore.me.color,
        })
      } else if (!UserStore.me) {
        console.log('[Race] Generating a guest user')
        const {id, name} = genGuestIdAndName()
        setId({id, name})
      }
      setIdComplete(true)
    }
  }, [UserStore.fetchingUser, UserStore.me])

  useEffect(() => {
    socket.on('update', (payload: TLobby) => {
      console.log(`[Race] Incoming update: ${payload}`)
      RaceStore.loadRoom(payload)
    })

    socket.on('race_send-wordList', (payload: string) => {
      RaceStore.loadWordSet(payload)
    })

    // Workaround for stale closures
    // May be unnecessary when cpm is stored in mobx
    socket.on('race_request-progress', (snapshot: TLobby) => {
      RaceStore.loadRoom(snapshot)
      setSendData(true)
    })
    return () => {
      socket.emit('race_leave')
      RaceStore.empty()
    }
  }, [])

  useEffect(() => {
    if (idComplete && lobbyId) {
      socket.emit('race_join-lobby', {
        id: id.id,
        name: id.name,
        lobbyId,
        color: id.color,
      })
    }
  }, [idComplete])

  useEffect(() => {
    if (RaceStore.room && sendData) {
      sendRaceProgress()
    }
  }, [sendData])

  return (
    <>
      <AnimatePresence>
        {RaceStore.room && id && RaceStore.room.state !== 'FINISHED' ? (
          <motion.div
            style={{display: 'flex', justifyContent: 'center'}}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, transition: {delay: 1.75}}}
          >
            <RacePosition playerId={id.id} />
            <SingleplayerContainer>
              <RaceMeta />
              <RaceTypingArea
                canType={RaceStore.room.state === 'IN_PROGRESS'}
              />
            </SingleplayerContainer>
          </motion.div>
        ) : (
          'looks like the room is busy'
        )}
      </AnimatePresence>
      {RaceStore.room && (
        <RaceResult
          raceOver={RaceStore.room.state === 'FINISHED'}
          playerId={id.id}
          playerColor={id.color}
          positions={RaceStore.positions}
        />
      )}
    </>
  )
})

export default Race
