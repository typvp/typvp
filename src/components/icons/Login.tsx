import React, {FC} from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
  /* right: 1vw; */
  /* width: 2em; */
  height: 1.5em;
  cursor: pointer;
  fill: ${({theme}) => theme.colors.text};
`

export const LoginIcon: FC = () => (
  <SVG viewBox="0 0 24 24">
    <path d="M20.5 15.1a1 1 0 00-1.34.45A8 8 0 1112 4a7.93 7.93 0 017.16 4.45 1 1 0 001.8-.9 10 10 0 100 8.9 1 1 0 00-.46-1.35zM21 11h-9.59l2.3-2.29a1 1 0 10-1.42-1.42l-4 4a1 1 0 00-.21.33 1 1 0 000 .76 1 1 0 00.21.33l4 4a1 1 0 001.42 0 1 1 0 000-1.42L11.41 13H21a1 1 0 000-2z" />
  </SVG>
)
