import { type JSX, type HTMLAttributes } from 'react'
import { global } from '../../config'
import { Flag } from '../flag'
import { Seal } from '../seal'
import { StyledEmblem } from './emblem-styled'

/**
 * `EmblemProps` interface declaration.
 * An extension to the HTMLAttributes of an HTMLDivElement.
 */
export interface EmblemProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Type of the emblem.
     */
    type: 'rectangle' | 'round' | 'square'
}

/**
 * `Emblem` component declaration.
 * A React component that displays the flag and the seal of Madagascar.
 */
export function Emblem({ type = 'rectangle', ...props }: EmblemProps): JSX.Element {
    global()
    
    return (
        <StyledEmblem aria-label="Madagascar Emblem" role="img" type={type} {...props}>
            <Seal size={type === 'rectangle'? 'medium' :'small'} />
            <Flag type={type} />
        </StyledEmblem>
    )
}

Emblem.displayName = 'Emblem'
