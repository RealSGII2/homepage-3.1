import { useRef } from 'react';
import Image from 'next/image';
import { GriddedHeroBox, MutedColoredBox } from 'components/ColoredBox';
import ContentBox, { HeroBox } from 'components/ContentBox';
import Flex from 'components/Flex';
import HeroButton from 'components/HeroButton';
import * as ProjectCard from 'components/ProjectCard';
import Statistic from 'components/Statistic';
import * as Text from 'components/Text';
import type { NextPage } from 'next';
import { styled } from 'styles/stitches';

// @ts-ignore
import { Row, Col } from 'react-flexbox-grid/dist/react-flexbox-grid';
import Head from 'next/head';
import Title from 'components/head/Title';

const projects = {
	featured: [
		{
			name: 'West Swim & Dive',
			image: 'https://cdn.realsgii2.dev/s/y3cnNv.png',
			description:
				'A forums-styled website built for a Swim & Dive team for a local high school. It features custom pages and moderation tools.',
			productionUrl: '//www.westswimdive.org/',
			sourceUrl: null,
		},
		{
			name: 'PATHOS-II',
			image: 'https://cdn.realsgii2.dev/s/inF5WP.png',
			description:
				"A clone of the PathOS terminal UI from the horror game, SOMA. It is a showcase of the capabilities of CSS's 9-slice imaging method. It features custom sound effects and cursors as well.",
			productionUrl: '//pathos.realsgii2.dev/',
			sourceUrl: '//github.com/RealSGII2/pathOS-ui',
		},
	],
	other: [
		{
			name: 'Musical Minesweeper',
			description:
				'A recreation of Minesweeper made for music nerds. Numbers are replaced with musical notes.',
			productionUrl: '//minesweeper.realsgii2.dev/',
			sourceUrl: '//github.com/RealSGII2/musical-minesweeper',
		},
		{
			name: 'MEE6 Level Calculator',
			description:
				"This calculates the amount of messages and experience you'd need to get a specific level in MEE6, the Discord bot.",
			productionUrl: '//mee6-calculator.realsgii2.dev/',
			sourceUrl: null,
		},
		{
			name: 'Benny Help',
			description: 'A documentation website for the Discord bot, Benny',
			productionUrl: null,
			sourceUrl: '//github.com/RealSGII2/benny-help',
		},
		{
			name: 'This Website :)',
			description:
				'An award winning* portfolio for the person who made this website.',
			productionUrl: null,
			sourceUrl: '//github.com/RealSGII2/homepage-3.1',
		},
	],
};

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
			<Head>
				<Title>William Wise (@RealSGII2)</Title>
			</Head>

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
								as='a'
								href='#about'
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

							<HeroButton secondary as='a' href='#projects'>
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
			<MutedColoredBox id='about'>
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

				<ContentBox id='projects'>
					<Text.SectionTitle style={{ marginTop: 48 }}>
						Technical Skills
					</Text.SectionTitle>
					<Flex style={{ gap: 8 }} wrap>
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
					<Text.SectionTitle
						style={{ marginTop: 64, marginBottom: 8 }}
					>
						Featured Projects
					</Text.SectionTitle>
					{/* <Flex scrollerOnSmall> */}
					<Row style={{ padding: 0 }}>
						{projects.featured.map((project) => {
							return (
								<Col
									key={project.name}
									md={6}
									sm={12}
									style={{ marginTop: 16 }}
								>
									<ProjectCard.Root>
										<ProjectCard.Image
											src={project.image}
										/>

										<ProjectCard.Body>
											<ProjectCard.Title>
												{project.name}
											</ProjectCard.Title>

											<Text.Body>
												{project.description}
											</Text.Body>

											<div style={{ flex: 1 }} />

											<Flex
												style={{ alignItems: 'center' }}
											>
												<HeroButton
													as='a'
													href={project.productionUrl}
													rel='noreferer'
													target='_blank'
												>
													<span>Visit</span>
												</HeroButton>

												{project.sourceUrl ? (
													<HeroButton
														secondary
														as='a'
														href={project.sourceUrl}
														rel='noreferer'
														target='_blank'
														style={{
															marginLeft: 8,
														}}
													>
														<span>View source</span>
													</HeroButton>
												) : (
													<span
														style={{
															marginLeft: 16,
														}}
													>
														Source code is not
														available.
													</span>
												)}
											</Flex>
										</ProjectCard.Body>
									</ProjectCard.Root>
								</Col>
							);
						})}

						{projects.other.map((project) => {
							return (
								<Col
									key={project.name}
									md={6}
									sm={12}
									style={{ marginTop: 16 }}
								>
									<ProjectCard.Root>
										<ProjectCard.Body>
											<ProjectCard.Title>
												{project.name}
											</ProjectCard.Title>

											<Text.Body style={{ fontSize: 18 }}>
												{project.description}
											</Text.Body>

											<div style={{ flex: 1 }} />

											<Flex
												style={{ alignItems: 'center' }}
											>
												{project.productionUrl && (
													<HeroButton
														small
														as='a'
														href={
															project.productionUrl
														}
														rel='noreferer'
														target='_blank'
														style={{
															marginRight: 8,
														}}
													>
														<span>Visit</span>
													</HeroButton>
												)}

												{project.sourceUrl ? (
													<HeroButton
														secondary
														small
														as='a'
														href={project.sourceUrl}
														rel='noreferer'
														target='_blank'
													>
														<span>View source</span>
													</HeroButton>
												) : (
													<span
														style={{
															marginLeft: 8,
														}}
													>
														Source code is not
														available.
													</span>
												)}
											</Flex>
										</ProjectCard.Body>
									</ProjectCard.Root>
								</Col>
							);
						})}
						{/* </Flex> */}
					</Row>

					<Text.JokeDisclaimer>* Self-awarded</Text.JokeDisclaimer>

					<div style={{ textAlign: 'center', padding: 0 }}>
						<HeroButton
							as='a'
							href='//github.com/realsgii2'
							rel='noreferer'
							target='_blank'
						>
							<span>View all on GitHub</span>
						</HeroButton>
					</div>
				</ContentBox>
			</MutedColoredBox>
		</>
	);
};

export default Home;
