import { createTheme } from './stitches';

const darkTheme = createTheme({
	colors: {
		'bg-default': '#2c2e33',
		'bg-muted': '#25262b',

		// 'fg-default': '#2D3340',
		'fg-default': '#ced4da',
		'fg-body': '#adb5bd',
        'fg-hero': '#8bcbd8',
        'fg-hero-faded': 'rgba(139, 203, 216, 0.4)',

		'border-default': '#DADEE6',
		'border-dark': '#5c5f66',

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

		'brand-gradientLeftSaturated': '#73A9FA',
		'brand-gradientRightSaturated': '#48daa7',

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
        appbar: '0 1px 3px rgba(03, 10, 27, 0.25)',
	},

	fonts: {
		'sans-serif': "'Fira Sans', sans-serif",
	},
});

export default darkTheme;
