import type { Meta, StoryObj } from '@storybook/react'
import { Seal } from '@dsmg/ui/src/components/seal'

const meta: Meta<typeof Seal> = {
    component: Seal,
    title: 'Components/Seal',
    argTypes: {
        size: {
            control: { type: 'radio' },
            options: ['small', 'medium', 'large'],
        },
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Seal>

/**
 * Small Seal
 */
export const SealSmallStory: Story = {
    render: (props) => <Seal {...props} />,
    name: 'Small Seal',
    args: {
        size: 'small'
    },
}

/**
 *  Medium Seal
 */
export const SealMediumStory: Story = {
    render: (props) => <Seal {...props} />,
    name: 'Medium Seal',
    args: {
        size: 'medium',
    },
}

/**
 *  Large Seal
 */
export const SealLargeStory: Story = {
    render: (props) => <Seal {...props} />,
    name: 'Large Seal',
    args: {
        size: 'large',
    },
}
