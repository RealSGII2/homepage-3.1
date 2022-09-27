import { styled } from 'styles/stitches';
import type { FC, ReactNode } from 'react';

const ContentBox = styled('section', {
	boxSizing: 'content-box',

	padding: '0 3rem',
	margin: '0 auto',

	width: '100%',
	maxWidth: 1260,

	'& > div': {
		paddingRight: 'max(3rem, 35%)',
	},

	variants: {
		hero: {
			true: {
				maxWidth: 'calc(1260px + 3rem)',
				minHeight: 'calc(100vh - 72px * 3)',

				paddingBottom: 72,
				paddingRight: 0,
				paddingTop: 128,

				'& > div': {
					minHeight: 'calc(100vh - 72px * 3)',
					height: 'calc(100vh - 72px * 3)',
					width: '100%',
				},
			},
		},
		heroOverlay: {
			true: {
				maxWidth: '100vw',
				padding: 0,
				margin: 0,

				width: '100%',
				height: '100vh',

				paddingTop: 72,

				left: 0,

				'& > div': {
					width: '100%',
					height: '100vh',
					paddingRight: '0',
				},

				zIndex: 2,

				position: 'absolute',
                top: 0,
			},
		},
	},
});

export const HeroBox: FC<{ children: ReactNode, overlay?: boolean }> = ({ children, overlay }) => {
	return (
		<ContentBox hero heroOverlay={overlay}>
			<div>{children}</div>
		</ContentBox>
	);
};

export default ContentBox;
