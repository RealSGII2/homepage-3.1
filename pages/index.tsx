import { useRef } from 'react';
import { GriddedHeroBox, MutedColoredBox } from 'components/ColoredBox';
import ContentBox, { HeroBox } from 'components/ContentBox';
import Flex from 'components/Flex';
import Flow from 'components/flow/Flow';
import TypedNode from 'components/flow/TypedNode';
import WebsiteNode from 'components/flow/WebsiteNode';
import HeroButton from 'components/HeroButton';
import Statistic from 'components/Statistic';
import * as Text from 'components/Text';
import type { NextPage } from 'next';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';
import { Edge, Node, Position } from 'react-flow-renderer';

const showcaseNodes: Node[] = [
	{
		id: 'note',
		type: 'note',
		data: {
			label: 'Connect the dots to make the perfect website!',
		},
		position: { x: 0, y: 0 },
	},
	{
		id: 'dev',
		type: 'dev',
		data: {},
		sourcePosition: Position.Right,
		position: { x: 300, y: 140 },
	},
	{
		id: 'simple',
		type: 'typed',
		data: {
			label: 'Simple',
		},
		sourcePosition: Position.Right,
		position: { x: 150, y: 0 },
	},
	{
		id: 'modern',
		type: 'typed',
		data: {
			label: 'Modern',
		},
		// sourcePosition: Position.Right,
		position: { x: 150, y: 120 },
	},
	{
		id: 'right',
		type: 'typed',
		data: {
			label: 'Right',
		},
		sourcePosition: Position.Right,
		position: { x: 150, y: 240 },
	},
	{
		id: 'web',
		type: 'website',
		data: {
			label: 'Right',
		},
		sourcePosition: Position.Right,
		position: { x: 350, y: 100 },
	},
];

const showcaseEdges: Edge[] = [{ id: 'e1-2', source: '1', target: '2' }];

const Home: NextPage = () => {
	const headlineRef = useRef();

	return (
		<>
			<GriddedHeroBox ref={headlineRef as any}>
				<HeroBox>
					<div
						style={{
							position: 'relative',
							zIndex: 5,
							width: 'fitContent',
						}}
					>
						<Text.FrontHeroText
							style={{ marginTop: 0, marginBottom: 0 }}
						>
							Web Design & Development <br />
							Done{' '}
							<Text.HeroUnderlinedBrand>
								Simple, Modern, & Right
							</Text.HeroUnderlinedBrand>
							.
						</Text.FrontHeroText>

						<Flex style={{ marginTop: 24, marginBottom: 64 }}>
							<HeroButton style={{ marginRight: 8 }}>
								<span>Who Am I?</span>
							</HeroButton>

							<HeroButton secondary>
								<span>See Projects</span>
							</HeroButton>
						</Flex>

						<Flex css={{ '& > *': { marginRight: 32 } }}>
							<Statistic title='Happy Users (2021)'>
								27,983
							</Statistic>
							<Statistic title='Official Websites'>11</Statistic>
							<Statistic title='Satisfied Clients'>2</Statistic>
						</Flex>
					</div>
				</HeroBox>
			</GriddedHeroBox>

			<MutedColoredBox>
				<ContentBox>
					<Text.SectionTitle>My Projects</Text.SectionTitle>
				</ContentBox>
			</MutedColoredBox>

			<HeroBox overlay>
				{/* <ReactFlow
					defaultNodes={showcaseNodes}
					defaultEdges={showcaseEdges}
					nodeTypes={{
						typed: TypedNode,
						website: WebsiteNode,
					}}
				>
					<MiniMap />
					<Controls />
				</ReactFlow> */}
				<Flow
					initialNodes={showcaseNodes}
					initialEdges={showcaseEdges}
					headlineRef={headlineRef}
				/>
			</HeroBox>
		</>
	);
};

export default Home;
