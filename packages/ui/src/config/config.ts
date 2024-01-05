import { createStitches } from '@stitches/react'

export const { styled, css, createTheme, theme, globalCss } = createStitches({
	theme: {
		colors: {},
		space: {
			1: '5px',
			2: '10px',
			3: '15px',
		},
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
		sizes: {},
		borderWidths: {},
		borderStyles: {},
		radii: {},
		shadows: {},
		zIndices: {},
		transitions: {},
	},
})
