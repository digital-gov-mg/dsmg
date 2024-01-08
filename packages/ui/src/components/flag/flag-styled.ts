import { styled } from '../../config'

export const StyledFLag = styled('svg', {
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',

    variants: {
        type: {
            rectangle: {
                height: '$l',
                viewBox:"0 0 $2xl $l",
                width: '$2xl',
            },
            square: {
                height: '$l',
                viewBox:"0 0 $l $l",
                width: '$l',
            },
            round:{
                height: '$l',
                viewBox:"0 0 $l $l",
                width: '$l',
                borderRadius: '$round'
            }
        }
    }
})
