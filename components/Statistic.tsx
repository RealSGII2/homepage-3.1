import { styled } from 'styles/stitches';
import type { FC, ReactNode } from 'react';

const StatisticRoot = styled('div', {
	'& > span': {
		'&:first-child': {
            display: 'block',

			fontSize: 14,
			fontWeight: 500,
		},

		'&:last-child': {
			fontSize: 48,
			fontWeight: 500,

            // backgroundColor: '$brandGradientLeftSaturated',
			// backgroundImage: 'linear-gradient(to right, $brand-gradientLeftSaturated, $brand-gradientRightSaturated)',

			// backgroundClip: 'text',
			// '-webkit-background-clip': 'text',

			// color: 'transparent',
			// '-webkit-text-fill-color': 'transparent',
            color: '#0781be',
		},
	},
});

const Statistic: FC<{ children: ReactNode; title: string }> = ({
	children,
	title,
}) => {
	return (
		<StatisticRoot>
			<span>{title}</span>
			<span>{children}</span>
		</StatisticRoot>
	);
};

export default Statistic;
