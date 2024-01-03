import React, { type JSX, type ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
    return (
        <button type="button" {...other}>
            {children}
        </button>
    )
}

Button.displayName = 'Button'
