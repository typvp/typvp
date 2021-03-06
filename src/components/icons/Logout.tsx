import React, {FC} from 'react'
import styled from 'styled-components'

const SVG = styled.svg`
  /* right: 1vw; */
  /* width: 2em; */
  height: 1.5em;
  cursor: pointer;
  fill: ${({theme}) => theme.colors.text};
`

export const LogoutIcon: FC = () => (
  <SVG viewBox="0 0 24 24">
    <path d="M12.59 13l-2.3 2.29a1 1 0 000 1.42 1 1 0 001.42 0l4-4a1 1 0 00.21-.33 1 1 0 000-.76 1 1 0 00-.21-.33l-4-4a1 1 0 10-1.42 1.42l2.3 2.29H3a1 1 0 000 2zM12 2a10 10 0 00-9 5.55 1 1 0 001.8.9A8 8 0 1112 20a7.93 7.93 0 01-7.16-4.45 1 1 0 00-1.8.9A10 10 0 1012 2z" />
  </SVG>
)
