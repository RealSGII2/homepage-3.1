import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import type { FC } from 'react';
import type { NodeProps } from 'react-flow-renderer';
import { handleStyles, InputLabel, StyledNode } from './_shared';
import { styled } from 'styles/stitches';

const StatusMessage = styled('div', {
	padding: '6px 8px',

	borderRadius: 5,
	marginTop: 4,

	// backgroundColor: '$brand-gradientRightDesaturated',
	color: '$brand-gradientRightSaturated',

	// border: 'solid 1px $border-default',
	// backgroundColor: '$bg-muted',
	// borderLeft: 'solid 5px $brand-gradientRightDesaturated',
});

type WebsiteNodeProps = {
	label: string;
};

const WebsiteNode: FC<NodeProps<WebsiteNodeProps>> = ({ data }) => {
	// const onChange = useCallback((evt: any) => {
	// 	console.log(evt.target.value);
	// }, []);

	const webHandleStyles = {
		...handleStyles,
		backgroundColor: 'var(--colors-brand-gradientLeftDesaturated)',
	};

	return (
		<StyledNode>
			<Handle
				type='target'
				position={Position.Left}
				style={{ top: 89, ...webHandleStyles }}
				id='1'
			/>
			<Handle
				type='target'
				position={Position.Left}
				style={{ top: 114, ...webHandleStyles }}
				id='2'
			/>
			<Handle
				type='target'
				position={Position.Left}
				style={{ top: 139, ...webHandleStyles }}
				id='3'
			/>

			<header>Your Website</header>

			<main style={{ width: 250 }}>
				<StatusMessage>Wow, this looks amazing!</StatusMessage>

				<InputLabel blue>Trait #1</InputLabel>

				<InputLabel blue>Trait #2</InputLabel>

				<InputLabel blue>Trait #3</InputLabel>
			</main>
		</StyledNode>
	);
};

export default WebsiteNode;
