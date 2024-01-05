import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@dsmg/ui/src/components/button'

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Button',
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: ['button', 'submit', 'reset'],
        },
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const ButtonPrimary: Story = {
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
    },
}
