import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import type { FC } from 'react';
import type { NodeProps } from 'react-flow-renderer';
import { handleStyles, InputLabel, StyledNode } from './_shared';
import { styled } from 'styles/stitches';

const DevToken = styled('span', {
	padding: '3px 12px',

	backgroundColor: '$brand-gradientRightDesaturated',

	borderRadius: 99,

	fontSize: 12,

	position: 'relative',
	zIndex: 2,

	'&::after': {
		content: '',
		position: 'absolute',

		left: 0,
		top: 8,

		width: 100,
		height: 1,

		zIndex: -1,

		transform: 'translate(0, 50%)',

		background: '$brand-gradientRightDesaturated',
	},
});

type DevNodeProps = {
	label: string;
};

const DevNode: FC<NodeProps<DevNodeProps>> = ({ data }) => {
	// const onChange = useCallback((evt: any) => {
	// 	console.log(evt.target.value);
	// }, []);

	return (
		<StyledNode>
			<Handle
				type='source'
				position={Position.Right}
				style={{
					top: 52,
					...handleStyles,
					transform: 'translate(-1px, -7px)',
					backgroundColor:
						'var(--colors-brand-gradientRightDesaturated)',
				}}
			/>

			<header>Developer</header>

			<main style={{ width: 108, marginTop: 4 }}>
				<DevToken>@wwise</DevToken>
			</main>
		</StyledNode>
	);
};

export default DevNode;
