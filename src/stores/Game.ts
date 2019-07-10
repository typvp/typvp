import {observable, action} from 'mobx'
import randomwords from 'random-words'

import {TypingState} from '@/types/game'

let timeout: any = null
class GameStore {
  @observable
  typedHistory: string[] = new Array(250).fill(null)

  @observable
  typedWord: string = ''

  @observable
  wordIndex: number = 0

  @observable
  time: number = 0

  @observable
  typingState: TypingState = TypingState.NotStarted

  @observable
  cpm: number = 0

  @observable
  rawCpm: number = 0

  @observable
  wpm: number = 0

  @observable
  words: string[] = []

  @observable
  corrections: number = 0

  @observable
  incorrect: number = 0

  @observable
  correct: number = 0

  incorrectIndex: number[] = []

  @action
  calculateResults = (): any => {
    /*
     * 1. Check if the word has been typed, if so, use the length of the typed word.
     *    if not, we won't want to increase character count (-1)
     *
     * 2. -250 being the length of the words array
     *    not sure what else is going on but it works lol
     *    +2 is because you count the space as a character as well
     */
    const characters = this.typedHistory
      .map(word => (word !== null ? word.length : -1)) // 1
      .reduce((a, b) => a + b + 2, -250) // 2

    // Raw CPM => Doesn't include mistakes
    this.rawCpm = Math.floor((characters / this.time) * 60)

    // Corrected CPM = > Subtract mistakes character length from all characters
    let adjustCpmBy = 0
    this.incorrectIndex.forEach(index => {
      if (this.typedHistory[index] !== null) {
        adjustCpmBy += this.typedHistory[index].length + 1
      }
    })

    const goodCharacters = characters - adjustCpmBy

    this.cpm = Math.floor((goodCharacters / this.time) * 60)

    this.wpm = this.cpm / 5
  }

  @action
  reset = () => {
    clearTimeout(timeout)
    this.typedHistory = new Array(250).fill('')
    this.typedWord = ''
    this.wordIndex = 0
    this.time = 0
    this.typingState = TypingState.NotStarted
    this.cpm = 0
    this.rawCpm = 0
    this.wpm = 0
    this.generateWords()
    this.corrections = 0
    this.incorrect = 0
    this.correct = 0
    this.incorrectIndex = []
  }

  @action
  generateWords = () => {
    this.words = randomwords({exactly: 250, maxLength: 8})
  }

  @action
  endTimer = () => {
    this.typingState = TypingState.AwaitingLastWord
  }

  @action
  runTimer = (): void => {
    timeout = setTimeout(() => {
      const {time} = this
      if (time < 60) {
        this.time++
        this.runTimer()
      } else {
        this.endTimer()
      }
    }, 1000)
  }

  @action
  onKeyDown = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (this.typingState === TypingState.NotStarted) {
      this.typingState = TypingState.InProgress
      this.runTimer()
    }

    if (e.target.value !== ' ') {
      this.typedWord = e.target.value
    }
  }

  @action
  onAction = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === ' ') {
      this.typedHistory[this.wordIndex] = this.typedWord

      if (this.typingState === TypingState.AwaitingLastWord) {
        this.typingState = TypingState.Finished
        this.calculateResults()
      }

      if (this.typedHistory[this.wordIndex] === this.words[this.wordIndex]) {
        this.correct++
      } else {
        this.incorrect++
        this.incorrectIndex.push(this.wordIndex)
      }

      this.typedWord = ''
      this.wordIndex++
      // this.calculateCpm()
    } else if (e.key === 'Backspace') {
      this.corrections++
    }
  }
}

export default new GameStore()
