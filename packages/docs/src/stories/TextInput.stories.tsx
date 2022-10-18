import { Box, Text, TextInput, TextInputProps } from '@ignite-ui-rt/react'

import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Telephone</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Typing your number...',
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'tel/',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
