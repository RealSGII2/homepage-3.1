import darkTheme from 'styles/darkTheme';
import { styled } from 'styles/stitches';

const transformTransition = 'transform 275ms ease-out';

const HeroButton = styled('button', {
	outline: 'none',

	cursor: 'pointer',

	position: 'relative',

	height: 48,
	padding: '0 1.75rem',

	border: 'none',
	borderRadius: 99,

	backgroundColor: 'transparent',

	fontSize: 18,
	fontWeight: 500,
	color: '#000000',
	textDecoration: 'none',

	display: 'inline-flex',
	alignItems: 'center',
	justifyContent: 'center',

	'& *': {
		position: 'relative',
		zIndex: 3,
	},

	'&::before, &::after': {
		content: '',
		position: 'absolute',

		top: 0,
		left: 0,
		right: 0,
		bottom: 0,

		borderRadius: 99,
	},

	'&::before': {
		zIndex: 1,

		backgroundColor: '$brand-emphasisDesaturated',
		backgroundImage: '$brand-gradientDesaturated',

		transition: transformTransition,
	},

	'&::after': {
		zIndex: 2,

		backgroundColor: '$brand-emphasis',
		backgroundImage: '$brand-gradient',

		opacity: 0,

		transition: `opacity 175ms ease, ${transformTransition}`,
	},

	'&:hover::after, &:active::after': {
		opacity: 1,
	},

	'&:focus::before': {
		boxShadow: '$brand-focus',
	},

	'& [data-icon-right]': {
		transition: transformTransition,
	},

	'&:hover [data-icon-right]': {
		transform: 'translateX(3px)',
	},

	'&:hover:active [data-icon-right]': {
		transform: 'translateX(6px)',
		transition: 'none',
	},

	'&:focus-visible::before': {
		boxShadow: '0 0 0 2px $colors$bg-default, 0 0 0 4px $colors$fg-hero',
	},

	variants: {
		secondary: {
			true: {
				[`.${darkTheme} &`]: {
					color: '#8bcbd8',

					'&::after': {
						opacity: 0.2,
					},

					'&:hover::after, &:active::after': {
						opacity: 0.3,
					},
				},

				'&::before': {
					backgroundColor: 'transparent',
					backgroundImage: 'none',
				},

				'&::after': {
					opacity: 0.3,
				},

				'&:hover::after, &:active::after': {
					opacity: 0.5,
				},

				'&:focus::before': {
					boxShadow:
						'$brand-focus, inset 0 0 0 1px $colors$brand-gradientRightSaturated',
				},

				'&:focus-visible::before': {
					boxShadow:
						'0 0 0 2px $colors$bg-default, 0 0 0 4px $colors$fg-hero, inset 0 0 0 1px $colors$fg-hero',
				},
			},
		},
		block: {
			true: {
				width: '100%',
			},
		},
		small: {
			true: {
				height: 36,
				padding: '0 1.25rem',
				fontSize: 14,
			},
		},
		medium: {
			true: {
				height: 38,
				padding: '0 1rem',
				fontSize: 16,
			},
		},
		noHoverSize: {
			true: {},
			undefined: {
				'&:hover::before, &:hover::after': {
					transform: 'scale(1.05)',
				},
			},
		},
		tertiary: {
			true: {
				padding: '0 0.75rem',

				color: '$fg-body',

				transition: 'color 275ms ease-out',

				'&::before': {
					backgroundColor: 'transparent',
					backgroundImage: 'none',
				},

				'&:hover, &:active': {
					color: '$fg-default',
				},

				'&:hover::after, &:active::after': {
					opacity: 0.3,
				},

				'&:focus::before': {
					boxShadow:
						'$brand-focus, inset 0 0 0 1px $colors$brand-gradientRightSaturated',
				},

				'&:focus-visible::before': {
					boxShadow:
						'0 0 0 2px $colors$bg-default, 0 0 0 4px $colors$fg-hero',
				},
			},
		},
		tertiaryAlt: {
			true: {
				color: '$fg-default',
			},
		},
		icon: {
			true: {
				height: 36,
				width: 36,
				padding: '0',
			},
		},
	},
});

export default HeroButton;
