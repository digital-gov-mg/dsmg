import { dirname, join, resolve } from 'path'

function getAbsolutePath(value: string) {
    return dirname(require.resolve(join(value, 'package.json')))
}

const config = {
    stories: ['../stories/*.stories.tsx', '../stories/**/*.stories.tsx'],
    features: {
        buildStoriesJson: true,
    },
    typescript: {
        reactDocgen: 'react-docgen',
        skipBabel: true,
        check: false,
    },
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-docs',
        '@storybook/addon-actions',
        '@storybook/addon-a11y',
    ],
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {},
    },

    core: {},

    async viteFinal(config: any, { configType }: any) {
        return {
            ...config,
            define: { 'process.env': {} },
            resolve: {
                alias: [
                    {
                        find: 'ui',
                        replacement: resolve(__dirname, '../../../packages/ui/'),
                    },
                ],
            },
        }
    },

    docs: {
        autodocs: true,
    },
}

export default config
