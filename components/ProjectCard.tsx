import { styled } from 'styles/stitches';

export const Root = styled('div', {
	maxWidth: 560,

	display: 'flex',
	flexDirection: 'column',

	borderRadius: 8,
	backgroundColor: '$bg-default',

	transition: '135ms ease-out',

	'&:hover': {
		boxShadow: 'rgb(53 60 77 / 10%) 0px 10px 16px',
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
	width: 560,
	borderTopLeftRadius: 'inherit',
	borderTopRightRadius: 'inherit',
});
