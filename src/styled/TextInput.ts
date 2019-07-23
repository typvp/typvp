import styled, {css} from 'styled-components'

import {colors} from '@/styled/Theme'

const inputBaseStyles = css`
  /* background-color: ${colors.n100}; */
  border: none;
  border-width: 1px;
  border-style: solid;
  border-color: ${colors.border.muted};
  border-radius: 4px;
  /* box-shadow: rgba(8, 35, 51, 0.05) 0px 1px 3px; */
  padding: 0.75rem 0.75rem;
  margin-bottom: 2em;
  transition: all 200ms ease-in-out;
  width: 100%;
  font-size: 0.8725rem;

  &:focus,
  &:active {
    border-color: ${colors.border.default};
    outline: none;
    box-shadow: rgba(8, 35, 51, 0.05) 0px 6px 10px;
  }

  &::placeholder {
    color: #9DA7B1;
    transition: color 200ms ease-in-out;
  }
  &[disabled],
  &:disabled {
    background-color: ${colors.background.tint1};
    &:active {
      border: 1px solid ${colors.background.tint2};
    }
  }
`

const inputOptionalStyles = css`
  background-color: #fafafa;
  border-style: dashed;
  box-shadow: none;
`

const inputDangerStyles = css`
  /* &:not(:focus) { */
  border-color: ${colors.intent.danger} !important;
  background: ${colors.r200};

  &::placeholder {
    color: ${colors.r200};
  }
  /* } */
`

interface IInput {
  isOptional?: boolean
  hasWarning?: boolean
}

const Input = styled.input<IInput>`
  ${inputBaseStyles};
  ${p =>
    p.isOptional &&
    css`
      ${inputOptionalStyles}
    `};
  ${p =>
    p.hasWarning &&
    css`
      ${inputDangerStyles}
    `};
`

const Label = styled.label`
  margin-bottom: 0.25em;
  display: block;
`

const LabelTip = styled('sup')`
  color: #7d7d7d;
`

const LabelConstraint = styled('sup')`
  color: ${colors.r300};
`

const InlineLabel = styled.label`
  /* margin-bottom: 0.25em; */
  margin-right: 0.25em;
  margin-left: 0.25em;
  display: inline;
`
const InlineInput = styled.input`
  display: inline;
  padding: 0 0.5em;
  margin: 1em 0 0 0;
  /* height: 56px; */
  border: 0;
  font-size: 1rem;
  background: #f3f3f3;
  border-radius: 3px;
  outline: 0;
`

export {Input, Label, LabelTip, LabelConstraint, InlineLabel, InlineInput}
