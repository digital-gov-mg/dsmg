import type { Meta, StoryObj } from '@storybook/react'
import { Institution } from '@dsmg/ui/src/components/institution'

const meta: Meta<typeof Institution> = {
    component: Institution,
    title: 'Components/Institution',
    argTypes: {
        type: {
            control: { type: 'radio' },
            options: ['ministry', 'department', 'regional'],
        },
        acronym: {},
        name: {},
        motto: {},
    },
    tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Institution>

/**
 * Ministry
 */
export const MinistryStory: Story = {
    render: (props) => <Institution {...props} />,
    name: 'Ministry',
    args: {
        type: 'ministry',
        acronym: 'MAE',
        name: 'du développement numérique,\n' +
            'de la transformation digitale,\n' +
            'des postes et des télécommunication',
        motto: 'Fitiavana - Tanindrazana - Fandrosoana'
    },
}

/**
 *  Department
 */
export const DepartmentStory: Story = {
    render: (props) => <Institution {...props} />,
    name: 'Central Department',
    args: {
        type: 'department',
        acronym: 'MAE',
        name: 'des affaires régionales',
        motto: 'Fitiavana - Tanindrazana - Fandrosoana'
    },
}

/**
 *  Regional
 */
export const RegionalStory: Story = {
    render: (props) => <Institution {...props} />,
    name: 'Regional Department',
    args: {
        type: 'regional',
        acronym: 'MAE',
        name: 'des affaires régionales',
        motto: 'Fitiavana - Tanindrazana - Fandrosoana'
    },
}
