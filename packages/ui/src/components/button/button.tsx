import React, { type JSX, type ButtonHTMLAttributes } from 'react'
import type * as Stitches from '@stitches/react'
import { StyledButton } from './button-styled'

type StyledButtonVariants = Stitches.VariantProps<typeof StyledButton>
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, StyledButtonVariants {
    children: React.ReactNode
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
    return (
        <StyledButton type="button" {...other}>
            {children}
        </StyledButton>
    )
}

Button.displayName = 'Button'
