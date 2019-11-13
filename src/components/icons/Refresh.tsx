import React, {FC} from 'react'
import styled, {keyframes, css} from 'styled-components'

const pulse = keyframes`
    0% {
      transform: rotate(50deg)
    }
    100% {
      transform: rotate(360deg)
    }
  `
interface IRefreshIcon {
  isSpinning?: boolean
}

const SVG = styled.svg<IRefreshIcon>`
  height: 1.5em;
  cursor: pointer;
  fill: ${({theme}) => theme.colors.text};
  transition: all 0.2s ease-out;

  &:hover {
    transform: rotate(50deg);
  }

  ${({isSpinning}) =>
    isSpinning &&
    css`
      animation: ${pulse} 0.5s ease-in-out infinite;
    `}
`

export const RefreshIcon: FC<IRefreshIcon> = ({isSpinning}) => (
  <SVG viewBox="0 0 100 100" isSpinning={isSpinning}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M50 82.998c-18.585 0-33.65-15.066-33.65-33.651 0-10 4.38-18.956 11.307-25.114h-5.921a3.014 3.014 0 01-3.014-3.014v-1.2a3.014 3.014 0 013.014-3.014h16.769c.012 0 .022-.003.034-.003h1.2c.833 0 1.588.339 2.133.885.546.546.884 1.299.884 2.132v1.2c0 .01-.003.019-.003.028v16.775a3.014 3.014 0 01-3.014 3.014h-1.2a3.014 3.014 0 01-3.014-3.014V27.434c-7.157 4.728-11.892 12.822-11.892 22.042 0 14.605 11.84 26.445 26.445 26.445s26.445-11.84 26.445-26.445c0-11.39-7.214-21.069-17.312-24.792.071-.064.132-.14.201-.208a2.817 2.817 0 01-1.129-2.249V21.1a2.832 2.832 0 012.832-2.832H62.2c.015-.079.034-.158.049-.237.319.125.626.275.94.409.122.043.238.094.351.153 11.829 5.215 20.111 16.997 20.111 30.755 0 18.584-15.067 33.65-33.651 33.65z"
    />
  </SVG>
)
