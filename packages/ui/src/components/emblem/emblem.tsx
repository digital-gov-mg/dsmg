import { type JSX, type HTMLAttributes } from 'react'
import { global } from '../../config'
import { StyledEmblem } from './emblem-styled'
import seal from './assets/seal.svg'

/**
 * `EmblemProps` interface declaration.
 * An extension to the HTMLAttributes of an HTMLDivElement.
 */
export interface EmblemProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * String that defines the shape of the emblem. The possible values are 'rectangle', 'round' or 'square.
     */
    type: 'rectangle' | 'round' | 'square'
}

export function Emblem({ type = 'rectangle' }: EmblemProps): JSX.Element {
    global()
    return (
        <StyledEmblem type={type}>
            <img alt="Seal" src={seal} />
            {type === 'rectangle' && (
                <svg
                    fill="none"
                    height="48"
                    viewBox="0 0 72 48"
                    width="72"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M24 24H72V48H24V24Z" fill="#00843D" />
                    <path d="M24 0H72V24H24V0Z" fill="#F9423A" />
                    <path d="M0 0H24V48H0V0Z" fill="white" />
                </svg>
            )}

            {type === 'square' && (
                <svg
                    fill="none"
                    height="48"
                    viewBox="0 0 48 48"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M24 24H48V48H24V24Z" fill="#00843D" />
                    <path d="M24 0H48V24H24V0Z" fill="#F9423A" />
                    <path d="M0 0H24V48H0V0Z" fill="white" />
                </svg>
            )}

            {type === 'round' && (
                <svg
                    fill="none"
                    height="48"
                    viewBox="0 0 48 48"
                    width="48"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M24 24H48C48 37.2548 37.2548 48 24 48V24Z"
                        fill="#00843D"
                    />
                    <path
                        d="M24 0C37.2548 0 48 10.7452 48 24H24V0Z"
                        fill="#F9423A"
                    />
                    <path
                        d="M0 24C0 10.7452 10.7452 0 24 0V48C10.7452 48 0 37.2548 0 24Z"
                        fill="white"
                    />
                </svg>
            )}
        </StyledEmblem>
    )
}

Emblem.displayName = 'Emblem'
