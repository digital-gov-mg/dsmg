import { styled } from '../../config'

export const StyledEmblem = styled('div', {
    backgroundColor: '#FFFFFF',
    position: 'relative',

    '& img': {
        position: 'absolute',
        width: '40px',
        height: '40px',
        objectFit: 'cover',
    },

    variants: {
        type: {
            rectangle: {
                width: '72px',
                height: '48px',
                '& img': {
                    width: '40px',
                    height: '40px',
                    top: 'calc(8px / 2)',
                    left: 'calc(8px / 2)',
                },
            },
            square: {
                width: '48px',
                height: '48px',
                '& img': {
                    width: '30px',
                    height: '30px',
                    top: 'calc(18px / 2)',
                    left: 'calc(18px / 2)',
                },
            },
            round: {
                width: '48px',
                height: '48px',
                borderRadius: '999999px',
                '& img': {
                    width: '30px',
                    height: '30px',
                    top: 'calc(18px / 2)',
                    left: 'calc(18px / 2)',
                },
            },
        },
    },
})
