import { colorPrimitives } from '../primitives'

/**
 * A list of all the color tokens.
 */
export const colors = {
    ...colorPrimitives,

    /**
     * The brand primary color.
     * It uses green primitive colors.
     */
    'brand-primary-lowest':     '$green50',
    'brand-primary-lower':      '$green100',
    'brand-primary-low':        '$green300',
    'brand-primary-medium':     '$green500',
    'brand-primary-high':       '$green700',
    'brand-primary-higher':     '$green900',
    'brand-primary-highest':    '$green950',

    /**
     * The brand secondary color.
     * It uses gray primitive colors.
     */
    'brand-secondary-lowest':   '$gray50',
    'brand-secondary-lower':    '$gray100',
    'brand-secondary-low':      '$gray300',
    'brand-secondary-medium':   '$gray500',
    'brand-secondary-high':     '$gray700',
    'brand-secondary-higher':   '$gray900',
    'brand-secondary-highest':  '$gray950',

    /**
     * The UI neutral color.
     * It uses slate primitive colors.
     */
    'ui-neutral-lowest':    '$slate50',
    'ui-neutral-lower':     '$slate100',
    'ui-neutral-low':       '$slate300',
    'ui-neutral-medium':    '$slate500',
    'ui-neutral-high':      '$slate700',
    'ui-neutral-higher':    '$slate900',
    'ui-neutral-highest':   '$slate950',

    /**
     * The UI success color.
     * It uses lime primitive colors.
     */
    'ui-success-lowest':    '$lime50',
    'ui-success-lower':     '$lime100',
    'ui-success-low':       '$lime300',
    'ui-success-medium':    '$lime500',
    'ui-success-high':      '$lime700',
    'ui-success-higher':    '$lime900',
    'ui-success-highest':   '$lime950',

    /**
     * The UI warning color.
     * It uses orange primitive colors.
     */
    'ui-warning-lowest':    '$orange50',
    'ui-warning-lower':     '$orange100',
    'ui-warning-low':       '$orange300',
    'ui-warning-medium':    '$orange500',
    'ui-warning-high':      '$orange700',
    'ui-warning-higher':    '$orange900',
    'ui-warning-highest':   '$orange950',

    /**
     * The UI danger color.
     * It uses red primitive colors.
     */
    'ui-danger-lowest': '$red50',
    'ui-danger-lower': '$red100',
    'ui-danger-low': '$red300',
    'ui-danger-medium': '$red500',
    'ui-danger-high': '$red700',
    'ui-danger-higher': '$red900',
    'ui-danger-highest': '$red950',
}