import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import type { FC } from 'react';
import type { NodeProps } from 'react-flow-renderer';
import { handleStyles, InputLabel, StyledNode } from './_shared';
import { styled } from 'styles/stitches';

type NoteNodeProps = {
	label: string;
};

const NoteNode: FC<NodeProps<NoteNodeProps>> = ({ data }) => {
	// const onChange = useCallback((evt: any) => {
	// 	console.log(evt.target.value);
	// }, []);

	return (
		<StyledNode>
			<header>Note</header>

			<main style={{ minWidth: 108, marginTop: 4 }}>
				<p style={{ fontSize: 14, margin: 0, }}>
					{data.label}
				</p>
			</main>
		</StyledNode>
	);
};

export default NoteNode;
