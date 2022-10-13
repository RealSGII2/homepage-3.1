import { styled } from 'styles/stitches';

export const Root = styled('div', {
	maxWidth: 'min(560px, calc(100vw - 4rem))',

	display: 'flex',
	flexDirection: 'column',

	borderRadius: 8,
	backgroundColor: '$bg-default',

	transition: '135ms ease-out',

	'&:hover': {
		boxShadow: '$medium'
	},
});

export const Body = styled('div', {
	padding: 24,

	display: 'flex',
	flexDirection: 'column',

	flex: 1,
});

export const Title = styled('h2', {
	fontSize: 20,
	fontWeight: 500,
	margin: 0,
});

export const Image = styled('img', {
	maxWidth: 560,
	borderTopLeftRadius: 'inherit',
	borderTopRightRadius: 'inherit',
});
