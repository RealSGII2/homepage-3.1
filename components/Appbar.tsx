import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { styled } from 'styles/stitches';
import ContentBox from './ContentBox';

const TopGradientBar = styled('div', {
	width: '100%',
	height: 8,

	backgroundColor: '$brand-emphasis',
	backgroundImage: '$brand-gradientStraight',
});

const AppbarRoot = styled('nav', {
	position: 'sticky',

	zIndex: 99,

	top: 0,
	left: 0,
	right: 0,

	backgroundColor: '$bg-default',

	transition: 'box-shadow 85ms ease-out',

	'& > section': {
		height: 64,

		display: 'flex',
		alignItems: 'center',
	},

	variants: {
		hasScrolled: {
			true: {
				boxShadow: '0 1px 3px rgba(53, 60, 77, 0.15)',
			},
		},
	},
});

export const Root: FC<{ children: ReactNode }> = ({ children }) => {
	const [hasScrolled, setScrolled] = useState(false);

	const onScroll = () => {
		if (typeof window === 'undefined') return;

		setScrolled(document.body.scrollTop > 0);
	};

	useEffect(() => {
		if (typeof window === 'undefined') return;

		document.body.addEventListener('scroll', onScroll);

		return () => {
			document.body.removeEventListener('scroll', onScroll);
		};
	});

	return (
		<AppbarRoot hasScrolled={hasScrolled}>
			<TopGradientBar />

			<ContentBox>{children}</ContentBox>
		</AppbarRoot>
	);
};
