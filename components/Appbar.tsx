import type { FC, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { styled } from 'styles/stitches';
import ContentBox from './ContentBox';
import HeroButton from './HeroButton';

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

	overflow: 'hidden',

	backgroundColor: '$bg-default',

	transition: 'box-shadow 85ms ease-out',

	'& > section': {
		height: 64,

		display: 'flex',

		'> div': {
			paddingRight: 0,

			display: 'flex',
			alignItems: 'center',
			flex: 1,

			'&:first-child': {
				'& > button': {
					display: 'none',
				},
			},

			'&:nth-child(2)': {
				flex: 2,
				justifyContent: 'center',
			},

			'&:nth-child(3)': {
				justifyContent: 'flex-end',
			},

			'> *': {
				marginRight: 16,

				'&:last-child': {
					marginRight: 0,
				},
			},
		},
	},

	'@smallScreen': {
		'& > section': {
			flexDirection: 'column',

			'& > div:first-child': {
				minHeight: 64,
				justifyContent: 'space-between',

				'& > button': {
					display: 'inline-flex',
				},
			},

			'& > div:nth-child(2)': {
				flexDirection: 'column',
				alignItems: 'stretch',

				paddingBottom: '1rem',
			},

			'& > div:nth-child(3)': {
				justifyContent: 'center',

				paddingBottom: '1.5rem',
			},
		},
	},

	variants: {
		hasScrolled: {
			true: {
				boxShadow: '$appbar',
			},
		},
		isOpen: {
			true: {
				'@smallScreen': {
					boxShadow: '$appbar',

					'& > section': {
						height: 'fit-content',
					},
				},
			},
		},
	},
});

export const Root: FC<{
	children: (args: { ToggleMenuButton: FC }) => ReactNode;
}> = ({ children }) => {
	const [hasScrolled, setScrolled] = useState(false);
	const [isMenuOpen, setMenuOpen] = useState(false);

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
		<AppbarRoot hasScrolled={hasScrolled} isOpen={isMenuOpen}>
			<TopGradientBar />

			<ContentBox>
				{children({
					ToggleMenuButton: () => {
						return (
							<HeroButton
								tertiary
								icon
								onClick={() => setMenuOpen(!isMenuOpen)}
							>
								<svg
									width='24'
									height='24'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M2 4H14M2 12H14M2 8H14'
										stroke='currentColor'
										stroke-width='1.25'
									/>
								</svg>
							</HeroButton>
						);
					},
				})}
			</ContentBox>
		</AppbarRoot>
	);
};
