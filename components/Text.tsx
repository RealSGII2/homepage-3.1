import { css, styled } from 'styles/stitches';

const sharedStyles = css({
	lineHeight: 1.3,

	variants: {
		weight: {
			regular: {
				fontWeight: 400,
			},
			medium: {
				fontWeight: 500,
			},
			bold: {
				fontWeight: 700,
			},
		},
		italicized: {
			true: {
				fontStyle: 'italic',
			},
		},
		fontFamily: {
			sansSerif: {
				fontFamily: '$sans-serif',
			},
		},
	},
});

export const FrontHeroText = styled('h1', sharedStyles, {
	fontSize: 56,
	fontWeight: 700,

	'@smallScreen': {
		fontSize: 36,

		'& [data-remove-small]': {
			display: 'none'
		}
	}
});

export const SectionTitle = styled('h2', sharedStyles, {
	fontSize: 24,
	fontWeight: 500,
})

export const Body = styled('p', sharedStyles, {
	fontSize: 20,
	color: '$fg-body',
})

export const Skill = styled('span', sharedStyles, {
	fontSize: 18,
	color: '$fg-body',
	backgroundColor: '$bg-default',

	borderRadius: 8,

	height: 44,
	padding: '0 1rem',

	lineHeight: '44px',
})

export const HeroUnderlinedBrand = styled('span', {
	position: 'relative',
	
	'&::before': {
		content: '',
		position: 'absolute',

		left: 0,
		right: 0,
		bottom: 2,

		height: 6,

		zIndex: -1,

		backgroundColor: '$brand-emphasis',
		backgroundImage: '$brand-gradient',
	}
});
