import { type HTMLAttributes, type JSX } from 'react';
import { StyledFLag } from './flag-styled'

export interface FlagProps extends HTMLAttributes<HTMLOrSVGElement>{
    /**
     * Type of the flag.
     */
    type: 'round' | 'rectangle' | 'square'
}
export function Flag({type = 'rectangle', ...props}: FlagProps): JSX.Element {
    return <StyledFLag aria-label="Madagascar flag" role="img" type={type} {...props}>
        <path d="M24 24H72V48H24V24Z" fill="#00843D" />
        <path d="M24 0H72V24H24V0Z" fill="#F9423A" />
        <path d="M0 0H24V48H0V0Z" fill="white" />
    </StyledFLag>
}

Flag.displayName = 'Flag'
