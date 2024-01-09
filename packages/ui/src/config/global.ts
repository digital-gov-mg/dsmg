import { globalCss } from './config'
import '@fontsource-variable/plus-jakarta-sans'

export const global = globalCss({
	'*': {
		margin: 0,
		padding: 0
	},
	body: {
		fontFamily: '$body'
	}
})
