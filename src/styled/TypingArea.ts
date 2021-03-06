import styled, {css} from 'styled-components'

const TypingAreaContainer = styled.div`
  display: grid;
  grid-row-gap: 1em;
  justify-self: center;
  background: ${({theme}) => theme.backgrounds.secondary};
  border-radius: 6px;
  padding: 1em;
  z-index: 1;
  width: 100%;

  input {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    font-size: 1.25rem;
    height: 50px;
    margin-bottom: 0.5em;
  }
`

interface ITypingAreaInner {
  disabled?: boolean
}

const TypingAreaInner = styled.div<ITypingAreaInner>`
  position: relative;
  height: 150px;
  overflow: hidden;

  ${p =>
    p.disabled &&
    css`
      &::before {
        display: block;
        position: absolute;
        content: '';
        width: 100%;
        height: 100%;
        background: ${({theme}) => theme.backgrounds.secondary};
        opacity: 0.5;
      }
    `}
`

export {TypingAreaContainer, TypingAreaInner}
