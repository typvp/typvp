export enum TypingState {
  NotStarted,
  InProgress,
  Finished,
}

export enum LobbyState {
  'WAITING' = 'WAITING',
  'IN_PROGRESS' = 'IN_PROGRESS',
  'FINISHED' = 'FINISHED',
  'STARTING' = 'STARTING',
}

export type TLobby = {
  default?: boolean
  countdown: number
  secondsRemaining: number
  acceptUpdates: boolean
  name: string
  state: LobbyState
  players: any[]
  id: string
}

export type TTrial = {
  name: string
  id: string
  wordSet: string
  difficulty: string
  minWordLength: number
  maxWordLength: number
}
