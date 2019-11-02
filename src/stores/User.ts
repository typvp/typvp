import {observable, action} from 'mobx'

interface IMe {
  username: string
  id: number
  email: string
  role: string
  lastSeen: number
  lastPlayed: string
  results: any
}

class UserStore {
  @observable
  me: IMe | undefined

  @action
  login = (token: string, account: IMe): void => {
    this.me = account
    localStorage.setItem('token', token)
  }

  @action
  persist = (me: IMe): void => {
    this.me = me
  }

  @action
  logout = () => {
    localStorage.removeItem('token')
    this.me = undefined
  }
}

export default new UserStore()
