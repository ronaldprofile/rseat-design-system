import { Heading, HeadingProps } from '@ignite-ui-rt/react'

import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typografh/Heading',
  component: Heading,
  args: {
    children: 'Custom title',
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },

  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
