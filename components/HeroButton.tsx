import { styled } from 'styles/stitches';

const transformTransition = 'transform 275ms ease-out'

const HeroButton = styled('button', {
    cursor: 'pointer',

    position: 'relative',

	height: 48,
	padding: '0 1.75rem',

	border: 'none',
	borderRadius: 99,

	backgroundColor: 'transparent',

	fontSize: 18,
	fontWeight: 500,
	color: '#000000',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

	'& *': {
        position: 'relative',
		zIndex: 3,
	},

    '&::before, &::after': {
        content: '',
        position: 'absolute',

        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

        borderRadius: 99,
    },

	'&::before': {
        zIndex: 1,

        backgroundColor: '$brand-emphasisDesaturated',
        backgroundImage: '$brand-gradientDesaturated',

        transition: transformTransition,
    },

    '&::after': {
        zIndex: 2,

        backgroundColor: '$brand-emphasis',
        backgroundImage: '$brand-gradient',

        opacity: 0,

        transition: `opacity 175ms ease, ${transformTransition}`,
    },

    '&:hover::before, &:hover::after': {
        transform: 'scale(1.05)',
    },

    '&:hover::after': {
        opacity: 1,
    },

    '&:focus::before': {
        boxShadow: '$brand-focus',
    },

    variants: {
        secondary: {
            true: {
                '&::before': {
                    backgroundColor: 'transparent',
                    backgroundImage: 'none',
                },
                
                '&::after': {
                    opacity: 0.3,
                },
                
                '&:hover::after': {
                    opacity: 0.65,
                },
            }
        }
    }
});

export default HeroButton;
