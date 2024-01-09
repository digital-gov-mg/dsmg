import { createStitches } from '@stitches/react'
import { colors, radii, sizes, space } from '../tokens'

/**
 * Tokens configuration.
 */
export const { styled, css, createTheme, theme, globalCss } = createStitches({
	prefix: 'dsmg',
	theme: {
		colors,
		space,
		radii,
		sizes,
		fontSizes: {
			1: '12px',
			2: '13px',
			3: '15px',
		},
		fonts: {
			body: 'Plus Jakarta Sans Variable, apple-system, sans-serif',
			untitled: 'Untitled Sans, apple-system, sans-serif',
			mono: 'Söhne Mono, menlo, monospace',
		},
		fontWeights: {},
		lineHeights: {},
		letterSpacings: {},
		borderWidths: {},
		borderStyles: {},
		shadows: {},
		zIndices: {},
		transitions: {},
	},
})
