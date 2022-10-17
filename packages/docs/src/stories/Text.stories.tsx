import { Text, TextProps } from '@ignite-ui-rt/react'

import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Typografh/Text',
  component: Text,
  args: {
    children: 'Send',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: "I'm strong",
    as: 'strong',
  },
}
