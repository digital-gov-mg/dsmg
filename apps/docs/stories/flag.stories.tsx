import type { Meta, StoryObj } from '@storybook/react'
import { Flag } from '@dsmg/ui/src/components/flag'

const meta: Meta<typeof Flag> = {
    component: Flag,
    title: 'Components/Flag',
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: ['rectangle', 'square', 'round'],
        },
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Flag>

/**
 * Rectangle flag
 */
export const FlagRectangleStory: Story = {
    render: (props) => <Flag {...props} />,
    name: 'Rectangle Flag',
    args: {
        type: 'rectangle'
    },
}

/**
 *  Square flag
 */
export const FlagSquareStory: Story = {
    render: (props) => <Flag {...props} />,
    name: 'Square Flag',
    args: {
        type: 'square',
    },
}

/**
 *  Round flag
 */
export const RegionalStory: Story = {
    render: (props) => <Flag {...props} />,
    name: 'Round Flag',
    args: {
        type: 'round',
    },
}
