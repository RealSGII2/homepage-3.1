import { useCallback, useEffect, useRef, useState } from 'react';
import ReactFlow, {
	applyEdgeChanges,
	applyNodeChanges,
	addEdge,
} from 'react-flow-renderer';
import type { FC } from 'react';
import type { Node, Edge } from 'react-flow-renderer';
import TypedNode from './TypedNode';
import WebsiteNode from './WebsiteNode';
import DevNode from './DevNode';
import NoteNode from './NoteNode';

type FlowProps = {
	initialNodes: Node[];
	initialEdges?: Edge[];
	headlineRef?: any;
};

type Bounds = {
	top: number;
	left: number;
	right: number;
	bottom: number;
	width: number;
	height: number;
};

const isMobileFlow = typeof window !== 'undefined' && window.innerWidth < 992;
const isLargeFlow = typeof window !== 'undefined' && window.innerWidth > 1250;

function getNodePositions(headlineBounds: Bounds): {
	[index: string]: { x: number; y: number };
} {
	const px = window.innerWidth * 0.05;
	const rfHeight = window.innerHeight * 0.8;
	const rfWidth = window.innerWidth;

	if (isMobileFlow) {
		const offsetY =
			headlineBounds.top +
			(headlineBounds.height ?? 0) +
			(rfHeight - (headlineBounds.height ?? 0)) / 2 -
			125;

		return {
			web: { x: rfWidth - 150 - px, y: offsetY + 15 },
			simple: { x: px + px / 4, y: offsetY + 15 },
			modern: { x: px / 2, y: offsetY + 90 },
			right: { x: px, y: offsetY + 170 },
			dev: { x: px, y: offsetY + 170 },
			note: { x: px, y: offsetY - 170 },
		};
	}

	if (isLargeFlow) {
		const offsetX = window.innerWidth - 550;
		const offsetY = window.innerHeight - 450;

		return {
			web: { x: offsetX + 240, y: offsetY },
			simple: { x: offsetX + 50, y: offsetY - 60 },
			modern: { x: offsetX + 50, y: offsetY + 80 },
			right: { x: offsetX + 50, y: offsetY + 220 },
			dev: { x: offsetX - 150, y: offsetY + 100 },
			note: { x: offsetX - 150, y: offsetY - 150 },
		};
	}

	const offsetX = headlineBounds.left + (headlineBounds.width ?? 0) + px;
	const offsetY = rfHeight / 2 + 150;

	return {
		web: { x: rfWidth - px - 180, y: offsetY + 20 },
		simple: { x: offsetX, y: offsetY - 10 },
		modern: { x: offsetX, y: offsetY + 100 },
		right: { x: offsetX, y: offsetY + 200 },
		dev: { x: 75, y: -35 },
		note: { x: px, y: offsetY - 170 },
	};
}

const Flow: FC<FlowProps> = ({ initialNodes, initialEdges, headlineRef }) => {
	const reactFlowRef = useRef<any>(null);

	const [moddedNodes, setModdedNodes] = useState(initialNodes);

	const [nodes, setNodes] = useState(initialNodes);
	const [edges, setEdges] = useState(initialEdges ?? []);

	const [headlineDimensions, setHeadlineDimensions] = useState<Bounds>();

	useEffect(() => {
		if (headlineRef.current && reactFlowRef.current) {
			const headlineBbox = headlineRef.current.getBoundingClientRect();
			const rfBbox = reactFlowRef.current.getBoundingClientRect();
			setHeadlineDimensions({
				top: headlineBbox.top - rfBbox.top,
				left: headlineBbox.left - rfBbox.left,
				right: headlineBbox.right - rfBbox.right,
				bottom: headlineBbox.bottom - rfBbox.bottom,
				width: headlineBbox.width,
				height: headlineBbox.height,
			});
		}
	}, [headlineRef]);

	useEffect(() => {
		if (!headlineDimensions) {
			return;
		}

		const nodePositions = getNodePositions(headlineDimensions);

		const copiedNodes = [...moddedNodes];

		for (let key in copiedNodes)
			copiedNodes[key].position = nodePositions[copiedNodes[key].id];

		setModdedNodes(copiedNodes);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [headlineDimensions]);

	const onNodesChange = useCallback(
		(changes: any) => setNodes((nds) => applyNodeChanges(changes, nds)),
		[setNodes]
	);
	const onEdgesChange = useCallback(
		(changes: any) => setEdges((eds) => applyEdgeChanges(changes, eds)),
		[setEdges]
	);
	const onConnect = useCallback(
		(connection: any) => setEdges((eds) => addEdge(connection, eds)),
		[setEdges]
	);

	return (
		<ReactFlow
			nodes={nodes}
			edges={edges}
			onNodesChange={onNodesChange}
			onEdgesChange={onEdgesChange}
			onConnect={onConnect}
			nodeTypes={{
				typed: TypedNode,
				website: WebsiteNode,
				dev: DevNode,
				note: NoteNode,
			}}
			defaultEdgeOptions={{
				animated: true,
				style: {
					stroke: 'black',
				},
			}}
			ref={reactFlowRef}
			defaultZoom={1}
			zoomOnScroll={false}
			zoomOnPinch={false}
			panOnScroll={false}
			preventScrolling={false}
			zoomOnDoubleClick={false}
			zoomActivationKeyCode={null}
			// defaultPosition={[503, 397]}
			// fitView
			nodesConnectable
		/>
	);
};

export default Flow;
