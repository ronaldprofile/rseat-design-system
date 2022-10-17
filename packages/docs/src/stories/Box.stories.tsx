import { Box, BoxProps, Text } from '@ignite-ui-rt/react'

import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text size="lg">Hi guys</Text>,
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
