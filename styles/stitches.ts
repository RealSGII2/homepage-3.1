import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, createTheme, theme } =
	createStitches({
		theme: {
			colors: {
				'bg-default': '#ffffff',
				'bg-muted': '#f1f4f9',

				// 'fg-default': '#2D3340',
				'fg-default': '#000000',
				'fg-body': '#5F6B7D',
				'fg-hero': '#0781be',
				'fg-hero-faded': 'rgba(7, 129, 190, 0.4)',

				'border-default': '#DADEE6',
				'border-dark': '#C2C5CC',

				'dot-dark': '#8A8E99',

				// 'brand-emphasis': '#47b6cb',
				// 'brand-gradientLeft': '#468df5',
				// 'brand-gradientRight': '#48daa7',

				'brand-focus': 'rgba(94, 193, 209, 0.4)',

				'brand-emphasis': '#73A9FA',
				'brand-gradientLeft': '#73A9FA',
				'brand-gradientRight': '#48daa7',

				'brand-gradient':
					'linear-gradient(to top right, $colors$brand-gradientLeft 0%, $colors$brand-gradientRight 100%)',
				'brand-gradientStraight':
					'linear-gradient(to right, $colors$brand-gradientLeft 0%, $colors$brand-gradientRight 100%)',

				'brand-gradientLeftSaturated': '#0A6AFA',
				'brand-gradientRightSaturated': '#029C75',

				'brand-emphasisDesaturated': '#8ac6df',
				'brand-gradientLeftDesaturated': '#8CB8FA',
				'brand-gradientRightDesaturated': '#89D9BD',

				'brand-gradientDesaturated':
					'linear-gradient(to top right, $colors$brand-gradientLeftDesaturated 0%, $colors$brand-gradientRightDesaturated 100%)',
				'brand-gradientStraightDesaturated':
					'linear-gradient(to right, $colors$brand-gradientLeftDesaturated 0%, $colors$brand-gradientRightDesaturated 100%)',
			},

			shadows: {
				'brand-focus': '0 0 0 3px $colors$brand-focus',
				appbar: '0 1px 3px rgba(53, 60, 77, 0.15)',
				medium: 'rgb(53 60 77 / 10%) 0px 10px 16px',
			},

			fonts: {
				'sans-serif': "'Fira Sans', sans-serif",
			},
		},

		media: {
			'smallScreen': '(max-width: 600px)',
			'contentSize': '(max-width: 1260px)'
		}
	});
