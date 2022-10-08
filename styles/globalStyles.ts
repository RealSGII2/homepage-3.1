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
		color: '$fg-default',

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
		color: '$fg-hero',

		boxShadow: '0 2px $colors$fg-hero-faded',

		transition: '125ms ease-out',

		'&:hover': {
			boxShadow: '0 3px $colors$fg-hero-faded, 0 3px $colors$fg-hero',
		},
	},
});

export default globalStyles;
