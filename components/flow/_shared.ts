import { styled } from "styles/stitches";

export const StyledNode = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	backgroundColor: '$bg-default',

	borderRadius: 8,
	border: 'solid 1px $colors$border-default',

	'& > header': {
		fontSize: 12,
		color: '$fg-muted',

		padding: '5px 8px',

		backgroundColor: '$bg-muted',

		borderTopRightRadius: 'inherit',
		borderTopLeftRadius: 'inherit',
		borderBottom: 'solid 1px $colors$border-default',
	},

	'& main': {
		padding: '8px',
	}
});


export const InputLabel = styled('p', {
	marginBlock: 8,

	fontSize: 14,
	fontWeight: 500,

	position: 'relative',
	
	paddingLeft: 8,

	'&::before': {
		content: '',
		position: 'absolute',

		left: -6,
		top: 8,

		width: 10,
		height: 1,

		background: 'var(--dot-color, $border-dark)',
	},

	variants: {
		green: {
			true: {
				'--dot-color': '$colors$brand-gradientRightDesaturated'
			}
		},
		blue: {
			true: {
				'--dot-color': '$colors$brand-gradientLeftDesaturated'
			}
		}
	}
})

export const handleStyles = {
	width: 7,
	height: 7,

	// left: -3,

	color: 'var(--colors-border-dark)',

	transform: 'translate(1px, -7px)',

	backgroundColor: 'currentcolor',
	border: 'none',

	zIndex: 2,
}