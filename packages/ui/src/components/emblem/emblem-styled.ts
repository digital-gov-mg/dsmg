import {styled} from '../../config'

export const StyledEmblem = styled('div', {
    backgroundColor: "#FFFFFF",
    border: 'solid 1px #EFEFEF',
    variants: {
        type: {
            rectangle:{
                width: '72px',
                height: '48px',
            },
            square: {
                width: '48px',
                height: '48px',
            },
            round: {
                width: '48px',
                height: '48px',
                borderRadius: '999999px'
            }
        }
    }
})