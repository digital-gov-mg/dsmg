import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@dsmg/ui'

const meta: Meta<typeof Button> = {
    component: Button,
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: ['button', 'submit', 'reset'],
        },
        size: {
            options: ["1", "2"]
        }
    },
}

export default meta

type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: (props) => (
        <Button
            {...props}
            onClick={(): void => {
                // eslint-disable-next-line no-alert -- alert for demo
                alert('Hello from Turborepo!')
            }}
        >
            Hello
        </Button>
    ),
    name: 'Button',
    args: {
        children: 'Hello',
        type: 'button',
        size: '1'
    },
}
