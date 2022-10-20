import { Box, MultStep, MultStepProps } from '@ignite-ui-rt/react'

import { StoryObj, Meta } from '@storybook/react'

export default {
  title: 'Form/MultStep',
  component: MultStep,
  args: {
    size: 4,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultStepProps>

export const Primary: StoryObj<MultStepProps> = {}

export const Full: StoryObj<MultStepProps> = {
  args: {
    currentStep: 4,
  },
}
