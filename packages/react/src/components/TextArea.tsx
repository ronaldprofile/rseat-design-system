import { ComponentProps } from 'react'
import { styled } from '../styles'

export const TextArea = styled('textarea', {
  padding: '$3 $4',
  minHeight: 80,
  background: '$gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$white',
  resize: 'vertical',

  '&:focus': {
    outline: 0,
    borderColor: '$ignite300',
  },

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})

export type TextAreaProps = ComponentProps<typeof TextArea> & {}
