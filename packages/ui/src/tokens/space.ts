import { numbersPrimitives } from '../primitives'

/**
 * Space tokens.
 * It is used for paddings, margins and gaps.
 */
export const space = {
    ...numbersPrimitives,

    '3xs':  '$1',   // 4px
    '2xs':  '$105', // 6px
    'xs':   '$2',   // 8px
    's':    '$3',   // 12px
    'm':    '$4',   // 16px
    'l':    '$6',   // 24px
    'xl':   '$8',   // 32px
    '2xl':  '$12',  // 48px
    '3xl':  '$16',  // 64px
    '4xl':  '$20',  // 80px
}