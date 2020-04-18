import React, {FC} from 'react'
import styled from 'styled-components'

export {LoginIcon} from './Login'
export {LogoutIcon} from './Logout'
export {RefreshIcon} from './Refresh'
export {SettingsIcon} from './Settings'
export {CheckmarkIcon} from './Checkmark'
export {UserIcon} from './User'
export {AdjustIcon} from './Adjust'
export {StopwatchIcon} from './Stopwatch'
export {UsersIcon} from './Users'
export {DeviceIcon} from './Device'
export {SaveIcon} from './Save'
export {TrashIcon} from './Trash'
export {EditIcon} from './Edit'
export {GemIcon} from './Gem'

export const SVGDefault = styled.svg`
  height: 1.5em;
  cursor: pointer;
  fill: ${({theme}) => theme.colors.text};
  margin-right: 0.5em;

  :last-child {
    margin-right: 0;
  }
`

export const DazzleIcon: FC = () => (
  <SVGDefault viewBox="0 0 512 512">
    <path d="M259.69042,85.96457l49.64549,20.69969,20.70353,49.643a6.65746,6.65746,0,0,0,11.926,0L362.667,106.66426l49.64549-20.69969a6.66574,6.66574,0,0,0,0-11.92493L362.667,53.338,341.96545,3.697a6.65746,6.65746,0,0,0-11.926,0L309.33591,53.338,259.69042,74.03964a6.66574,6.66574,0,0,0,0,11.92493ZM364.294,267.29343,259.4951,251.99764l-46.90716-95.19633c-8.39078-16.99879-32.68813-17.2019-41.18829,0l-46.90716,95.19633L19.69358,267.29343C.89634,269.99636-6.71318,293.19783,6.99021,306.49376l75.90772,73.99472L64.89758,485.07476c-3.20319,18.9049,16.68782,33.107,33.29752,24.2014l93.7987-49.3871,93.79869,49.3871A22.95361,22.95361,0,0,0,319.09,485.07476L301.199,380.48848l75.89209-73.99472C390.70077,293.19783,383.09125,269.99636,364.294,267.29343ZM509.05268,219.2285,469.339,202.67109,452.7801,162.961a5.32691,5.32691,0,0,0-9.5412,0L426.678,202.67109l-39.7117,16.55741a5.33385,5.33385,0,0,0,0,9.54033L426.678,245.3282l16.56087,39.7081a5.32534,5.32534,0,0,0,9.5412,0L469.339,245.3282l39.71366-16.55937a5.33386,5.33386,0,0,0,0-9.54033Z" />
  </SVGDefault>
)

export const BookmarkIcon: FC = () => (
  <SVGDefault viewBox="0 0 384 512">
    <path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z" />
  </SVGDefault>
)

export const ScrollIcon: FC = () => (
  <SVGDefault viewBox="0 0 640 512">
    <path d="M48 0C21.53 0 0 21.53 0 48v64c0 8.84 7.16 16 16 16h80V48C96 21.53 74.47 0 48 0zm208 412.57V352h288V96c0-52.94-43.06-96-96-96H111.59C121.74 13.41 128 29.92 128 48v368c0 38.87 34.65 69.65 74.75 63.12C234.22 474 256 444.46 256 412.57zM288 384v32c0 52.93-43.06 96-96 96h336c61.86 0 112-50.14 112-112 0-8.84-7.16-16-16-16H288z" />
  </SVGDefault>
)

export const FlagIcon: FC = () => (
  <SVGDefault viewBox="0 0 640 512">
    <path d="M243.2 189.9V258c26.1 5.9 49.3 15.6 73.6 22.3v-68.2c-26-5.8-49.4-15.5-73.6-22.2zm223.3-123c-34.3 15.9-76.5 31.9-117 31.9C296 98.8 251.7 64 184.3 64c-25 0-47.3 4.4-68 12 2.8-7.3 4.1-15.2 3.6-23.6C118.1 24 94.8 1.2 66.3 0 34.3-1.3 8 24.3 8 56c0 19 9.5 35.8 24 45.9V488c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-94.4c28.3-12.1 63.6-22.1 114.4-22.1 53.6 0 97.8 34.8 165.2 34.8 48.2 0 86.7-16.3 122.5-40.9 8.7-6 13.8-15.8 13.8-26.4V95.9c.1-23.3-24.2-38.8-45.4-29zM169.6 325.5c-25.8 2.7-50 8.2-73.6 16.6v-70.5c26.2-9.3 47.5-15 73.6-17.4zM464 191c-23.6 9.8-46.3 19.5-73.6 23.9V286c24.8-3.4 51.4-11.8 73.6-26v70.5c-25.1 16.1-48.5 24.7-73.6 27.1V286c-27 3.7-47.9 1.5-73.6-5.6v67.4c-23.9-7.4-47.3-16.7-73.6-21.3V258c-19.7-4.4-40.8-6.8-73.6-3.8v-70c-22.4 3.1-44.6 10.2-73.6 20.9v-70.5c33.2-12.2 50.1-19.8 73.6-22v71.6c27-3.7 48.4-1.3 73.6 5.7v-67.4c23.7 7.4 47.2 16.7 73.6 21.3v68.4c23.7 5.3 47.6 6.9 73.6 2.7V143c27-4.8 52.3-13.6 73.6-22.5z" />
  </SVGDefault>
)
