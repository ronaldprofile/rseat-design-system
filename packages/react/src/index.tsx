import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  background: '$ignite300',
  color: '$white',
  fontWeight: '$bold',

  border: 0,

  variants: {
    size: {
      small: {
        padding: '$4 $4',
        fontSize: '$sm',
      },
      big: {
        padding: '$4 $6',
        fontSize: '$md',
      },
    },
  },

  defaultVariants: { size: 'small' },
})

export type ButtonProps = ComponentProps<typeof Button>
