import { MutedColoredBox } from 'components/ColoredBox';
import ContentBox, { HeroBox } from 'components/ContentBox';
import HeroButton from 'components/HeroButton';
import * as Text from 'components/Text';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<>
			<HeroBox>
				<Text.FrontHeroText style={{ marginTop: 0, marginBottom: 0, }}>
					Web Design & Development <br />
					Done{' '}
					<Text.HeroUnderlinedBrand>
						Simple, Modern, & Right
					</Text.HeroUnderlinedBrand>
					.
				</Text.FrontHeroText>

				<HeroButton style={{ marginTop: 24, marginBottom: 128 }}>
					<span>See Projects</span>
				</HeroButton>

				<Text.SectionTitle>
					About Me
				</Text.SectionTitle>

				<Text.Body>
					Hi, I&apos;m William. My passion is to create anything
					creative on the internet.
				</Text.Body>
				<Text.Body>
					I&apos;ve first started my interest in web development in
					2013 using Wix, a website builder that&apos;s a little more
					customizable than normal builders.
				</Text.Body>
				<Text.Body>
					In 2016, I was tired of the limitations and advertisements
					on the platform, and decided to follow my friend&apos;s
					path. He was using HTML to build websites. I visited
					w3schools and took apart the HTML, JS, and CSS, and learned
					what each part does.
				</Text.Body>
				<Text.Body>
					I grew from there. I was tired of the capabilities of HTML
					and tried out EJS. Then Vue.js. Then React.js. I got into
					more styling languages like Sass and SCSS.
				</Text.Body>
				<Text.Body>
					This is the result of my journey of self-learning. I
					didn&apos;t study or take any classes, I just experimented
					and grew. My skills are the result of 9 years of experience.
					So far, I&apos;ve made websites for several people (not all
					of them are serious), for even sports teams at my own
					school.
				</Text.Body>
			</HeroBox>

			<MutedColoredBox>
				<ContentBox>
					<Text.SectionTitle>
						My Projects
					</Text.SectionTitle>
				</ContentBox>
			</MutedColoredBox>
		</>
	);
};

export default Home;
