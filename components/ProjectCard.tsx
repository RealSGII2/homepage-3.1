import { styled } from 'styles/stitches';

export const Root = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	height: '100%',

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
	width: '100%',
	borderTopLeftRadius: 'inherit',
	borderTopRightRadius: 'inherit',
});
