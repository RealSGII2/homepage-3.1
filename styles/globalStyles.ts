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
		position: 'relative',

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
		color: '#000',
	},

	a: {
		textDecoration: 'none',
		color: '#0781be',

		boxShadow: '0 2px rgba(7, 129, 190, 0.4)',

		transition: '125ms ease-out',

		'&:hover': {
			boxShadow: '0 3px rgba(7, 129, 190, 0.4), 0 3px rgba(7, 129, 190, 1)',
		},
	},
});

export default globalStyles;
