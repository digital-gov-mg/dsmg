import React, { type JSX, type ButtonHTMLAttributes } from 'react'
import { global } from '../../config'
import { StyledButton } from './button-styled'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}


export function Button({ children, ...other }: ButtonProps): JSX.Element {
    global()

    return (
        <StyledButton type="button" {...other}>
            {children}
        </StyledButton>
    )
}

Button.displayName = 'Button'
