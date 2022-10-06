import { styled } from 'styles/stitches';

export const MutedColoredBox = styled('div', {
	backgroundColor: '$bg-muted',
	padding: '6rem 0',
});

export const GriddedHeroBox = styled('div', {
	background: `
         linear-gradient(270deg, $colors$bg-default 20px, transparent 1%) center,
         linear-gradient($colors$bg-default 20px, transparent 1%) center,
         $colors$border-dark`,
	backgroundSize: '22px 22px',
	backgroundPosition: '0 2px',

	position: 'relative',

	'&::before': {
		content: '',
		position: 'absolute',

		top: 0,
		left: 0,
		right: 0,
		bottom: 0,

		backgroundImage:
			'linear-gradient(90deg, $colors$bg-default 50%, transparent 75%)',
	},
});
