import { styled } from '../../config'

export const StyledSeal = styled('img', {
    objectFit: 'cover',

    variants: {
        size: {
            small: {
                width: '$sizes$s',
                height: '$sizes$s',
            },
            medium: {
                width: '$sizes$m',
                height: '$sizes$m',
            },
            large: {
                width: '$sizes$l',
                height: '$sizes$l',
            }
        }
    }
})

StyledSeal.displayName = 'StyledSeal'
