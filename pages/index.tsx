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
import { Parallax } from 'react-scroll-parallax';

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
							<HeroButton
								style={{ marginRight: 12, paddingRight: 20 }}
							>
								<span style={{ marginRight: 8 }}>About me</span>

								{/* <svg
									data-icon-right
									aria-hidden='true'
									width='24'
									height='24'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M13 8H2M13 8L9 4M13 8L9 12'
										stroke='black'
										stroke-width='1.5'
									/>
								</svg> */}
							</HeroButton>

							<HeroButton secondary>
								<span>My projects</span>
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

			<Parallax speed={-15}>
				<MutedColoredBox>
					<ContentBox>
						<Text.SectionTitle>About Me</Text.SectionTitle>
						<Text.Body>
							Hello, I&apos;m William Wise. I&apos;m a web
							developer and designer based in Arkansas. I like to
							build creatively, and exploring new things.
						</Text.Body>
						<Text.Body>
							My first web design experience was all the way back
							in 2013, where I used{' '}
							<a
								href='https://www.wix.com/'
								target='_blank'
								rel='noreferrer'
							>
								Wix
							</a>{' '}
							(a little-more-than customizeable website creation
							website). Three years later, I was tired of being
							broke and the limitations of Wix, so I hopped onto
							w3schools and learned HTML. Growing from there, I
							moved onto EJS, then Vue.js, then finally React. My
							favorite framework ended up being{' '}
							<a
								href='https://nextjs.org/conf'
								target='_blank'
								rel='noreferrer'
							>
								Next.js
							</a>{' '}
							with React.
						</Text.Body>
						<Text.Body>
							In my spare time, I like to play (relatively few)
							video games, do graphic design, 3D model, play with
							audio, and just do &quot;web doodles&quot;
							(basically non-functional websites just to make
							them).
						</Text.Body>
					</ContentBox>
				</MutedColoredBox>
			</Parallax>

			{/* <HeroBox overlay>
				<Flow
					initialNodes={showcaseNodes}
					initialEdges={showcaseEdges}
					headlineRef={headlineRef}
				/>
			</HeroBox> */}
		</>
	);
};

export default Home;
