import { styled } from '../../config'

export const StyledEmblem = styled('div', {
    backgroundColor: '$white950',
    position: 'relative',

    '& img': {
        position: 'absolute',
        objectFit: 'cover',
    },

    variants: {
        type: {
            rectangle: {
                width: '$space$18',
                height: '$space$12',

                '& img': {
                    width: '$seal-big-width',
                    height: '$seal-big-height',
                    top: 'calc(calc($space$12 - $space$10) / 2)',
                    left: 'calc(calc($space$12 - $space$10) / 2)',
                },
            },
            square: {
                width: '$space$12',
                height: '$space$12',

                '& img': {
                    width: '$seal-small-width',
                    height: '$seal-small-height',
                    top: 'calc(calc($space$12 - $space$8) / 2)',
                    left: 'calc(calc($space$12 - $space$8) / 2)',
                },
            },
            round: {
                width: '$space$12',
                height: '$space$12',
                borderRadius: '$radii$round',

                '& img': {
                    width: '$seal-small-width',
                    height: '$seal-small-height',
                    top: 'calc(calc($space$12 - $seal-small-width) / 2)',
                    left: 'calc(calc($space$12 - $seal-small-height) / 2)',
                },
            },
        },
    },
})

StyledEmblem.displayName = 'StyledEmblem'
