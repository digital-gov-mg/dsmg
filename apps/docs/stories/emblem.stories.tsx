import type { Meta, StoryObj } from '@storybook/react'
import { Emblem } from '@dsmg/ui/src/components/emblem'

const meta: Meta<typeof Emblem> = {
    component: Emblem,
    title: 'Emblem',
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: ['rectangle', 'square', 'round'],
        },
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Emblem>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const RectangleEmblem: Story = {
    render: (props) => <Emblem {...props} />,
    args: {
        type: 'rectangle',
    },
}
