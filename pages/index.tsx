import { useRef } from 'react';
import Image from 'next/image';
import { GriddedHeroBox, MutedColoredBox } from 'components/ColoredBox';
import ContentBox, { HeroBox } from 'components/ContentBox';
import Flex from 'components/Flex';
import Flow from 'components/flow/Flow';
import TypedNode from 'components/flow/TypedNode';
import WebsiteNode from 'components/flow/WebsiteNode';
import HeroButton from 'components/HeroButton';
import * as ProjectCard from 'components/ProjectCard';
import Statistic from 'components/Statistic';
import * as Text from 'components/Text';
import type { NextPage } from 'next';
import ReactFlow, { MiniMap, Controls } from 'react-flow-renderer';
import { Edge, Node, Position } from 'react-flow-renderer';
import { styled } from 'styles/stitches';

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

const HeroImage = styled('div', {
	borderRadius: 24,
	overflow: 'hidden',
	transition: '125ms ease-out',

	position: 'relative',

	'& > *': {
		left: '50%',

		transform: 'translateX(-50%) scale(1.1)',
		transition: '125ms ease-out',
		margin: 0,
	},

	'&:hover > *': {
		transform: 'translateX(-50%) scale(1.035)',
	},

	'@smallScreen': {
		width: 'calc(100vw - 4rem)',

		'& > *': {
			width: '100%',
			transform: 'translateX(-50%) scale(1.1)',
		},

		'&:hover > *': {
			transform: 'translateX(-50%) scale(1.1)',
		},
	},
});

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
							Web Design & Development{' '}
							<span data-remove-small>
								<br />
							</span>
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

						<Flex gap={16} flipOnSmall>
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
					<Flex style={{ padding: 0 }} flipOnSmall gap={32}>
						<div style={{ width: 256, flexShrink: 0 }}>
							<HeroImage>
								<Image
									alt='A photo of me, William.'
									src='/img/portrait.png'
									width='300px'
									height='300px'
								/>
							</HeroImage>
						</div>
						<div>
							<Text.SectionTitle style={{ marginTop: 0 }}>
								About Me
							</Text.SectionTitle>
							<Text.Body>
								Hello, I&apos;m William Wise. I&apos;m a web
								developer and designer based in Arkansas. I like
								to build creatively, and exploring new things.
							</Text.Body>
							<Text.Body>
								My first web design experience was all the way
								back in 2013, where I used{' '}
								<a
									href='https://www.wix.com/'
									target='_blank'
									rel='noreferrer'
								>
									Wix
								</a>{' '}
								(a little-more-than customizeable website
								creation website). Three years later, I was
								tired of being broke and the limitations of Wix,
								so I hopped onto w3schools and learned HTML.
								Growing from there, I moved onto EJS, then
								Vue.js, then finally React. My favorite
								framework ended up being{' '}
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
								In my spare time, I like to play (relatively
								few) video games, do graphic design, 3D model,
								play with audio, and just do &quot;web
								doodles&quot; (basically non-functional websites
								just to make them).
							</Text.Body>
						</div>
					</Flex>
				</ContentBox>

				<ContentBox>
					<Text.SectionTitle style={{ marginTop: 48 }}>
						Technical Skills
					</Text.SectionTitle>
					<Flex style={{ gap: 8 }} scrollerOnSmall>
						<Text.Skill>Typescript</Text.Skill>
						<Text.Skill>TSX</Text.Skill>
						<Text.Skill>HTML</Text.Skill>
						<Text.Skill>CSS</Text.Skill>
						<Text.Skill>Sass</Text.Skill>
						<Text.Skill>React.js</Text.Skill>
						<Text.Skill>Next.js</Text.Skill>
						<Text.Skill>Node.js</Text.Skill>
						<Text.Skill>Git</Text.Skill>
						<Text.Skill>GitHub</Text.Skill>
					</Flex>
				</ContentBox>

				<ContentBox>
					<Text.SectionTitle style={{ marginTop: 48 }}>
						Featured Projects
					</Text.SectionTitle>
					<Flex scrollerOnSmall>
						<ProjectCard.Root>
							<ProjectCard.Image src='https://cdn.realsgii2.dev/s/y3cnNv.png' />

							<ProjectCard.Body>
								<ProjectCard.Title>
									West Swim & Dive
								</ProjectCard.Title>

								<Text.Body>
									A forums-styled website built for a Swim &
									Dive team for a local high school. It
									features custom pages and moderation tools.
								</Text.Body>

								<div style={{ flex: 1 }} />

								<Flex style={{ alignItems: 'center' }}>
									<HeroButton>
										<span>Visit</span>
									</HeroButton>

									<span style={{ marginLeft: 16 }}>
										Source code is not available.
									</span>
								</Flex>
							</ProjectCard.Body>
						</ProjectCard.Root>

						<ProjectCard.Root style={{ marginLeft: 16 }}>
							<ProjectCard.Image src='https://cdn.realsgii2.dev/s/inF5WP.png' />

							<ProjectCard.Body>
								<ProjectCard.Title>PATHOS-II</ProjectCard.Title>

								<Text.Body>
									A clone of the PathOS terminal UI from the
									horror game, SOMA. It is a showcase of the
									capabilities of CSS&apos;s 9-slice imaging
									method. It features custom sound effects and
									cursors as well.
								</Text.Body>

								<div style={{ flex: 1 }} />

								<Flex style={{ alignItems: 'center' }}>
									<HeroButton>
										<span>Visit</span>
									</HeroButton>

									<HeroButton
										secondary
										style={{ marginLeft: 8 }}
									>
										<span>View source</span>
									</HeroButton>
								</Flex>
							</ProjectCard.Body>
						</ProjectCard.Root>
					</Flex>
				</ContentBox>
			</MutedColoredBox>

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
