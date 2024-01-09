import { type HTMLAttributes, type JSX} from 'react'
import seal from './assets/seal.svg'
import { StyledSeal } from './seal-styled'

export interface SealProps extends HTMLAttributes<HTMLImageElement>{
    /**
     * Size of the seal.
     */
    size:'small' |'medium' | 'large'
}

export function Seal({size = 'medium', ...props}: SealProps): JSX.Element  {
    return <StyledSeal alt="Madagascar Seal" size={size} src={seal} {...props} />
}
