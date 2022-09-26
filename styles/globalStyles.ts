import { globalCss } from './stitches';

const globalStyles = globalCss({
	'html, body': {
		width: '100%',
		height: '100%',

		padding: 0,
		margin: 0,

		overflow: 'hidden',
	},

	body: {
		backgroundColor: '$bg-default',

		fontFamily: '$sans-serif',

		overflowY: 'auto',
	},

	'*, *::before, *::after': {
		fontFamily: 'inherit',
		boxSizing: 'border-box',
	},

	'::selection': {
		backgroundColor: '$brand-emphasisDesaturated',
		color: '#000'
	},
});

export default globalStyles;
