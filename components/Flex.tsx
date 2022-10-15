import { styled } from 'styles/stitches';

const Flex = styled('div', {
	display: 'flex',

	'@smallScreen': {
		display: 'inline-flex',
	},

	'& > *:not(:last-child)': {
		marginRight: 'var(--gap)',
	},

	variants: {
		wrap: {
			true: {
				flexWrap: 'wrap',
			},
		},
		flipOnSmall: {
			true: {
				'@smallScreen': {
					flexDirection: 'column',

					'& > *:not(:last-child)': {
						marginRight: '0px',
						marginBottom: 'var(--gap)',
					},
				},
			},
		},
		scrollerOnSmall: {
			true: {
				'@contentSize': {
					marginLeft: '-2rem',
					marginRight: '-2rem',

					maxWidth: '100vw',
					padding: '0 2rem',
					overflow: 'auto',

					'& > *:last-child': {
						marginRight: '2rem',
					},
				},
			},
		},
		gap: {
			16: {
				'--gap': '16px',
			},
			32: {
				'--gap': '32px',
			},
		},
	},
});

export default Flex;
