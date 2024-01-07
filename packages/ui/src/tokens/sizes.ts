import { numbersPrimitives } from '../primitives'

/**
 * Size tokens.
 */
export const sizes = {
    '3xs':  numbersPrimitives['3'],             // 12px
    '2xs':  numbersPrimitives['4'],             // 16px
    'xs':   numbersPrimitives['5'],             // 20px
    's':    numbersPrimitives['8'],             // 32px
    'm':    numbersPrimitives['10'],            // 40px
    'l':    numbersPrimitives['12'],            // 48px
    'xl':   numbersPrimitives['16'],            // 64px
    '2xl':  numbersPrimitives['18'],            // 72px
    '3xl':  numbersPrimitives['20'],            // 80px
    'full': numbersPrimitives['max-percent'],   // 100%

    'emblem-rectangle-width': '$2xl',
    'emblem-rectangle-height': '$l',

    'emblem-square-width': '$l',
    'emblem-square-height': '$l',

    'emblem-round-width': '$l',
    'emblem-round-height': '$l',

    'seal-big-width': '$m',
    'seal-big-height': '$m',

    'seal-small-width': '$s',
    'seal-small-height': '$s',
}