import type { AppProps } from 'next/app';
import * as Appbar from 'components/Appbar';
import Head from 'next/head';
import globalStyles from 'styles/globalStyles';
import Logo from 'components/Logo';
import HeroButton from 'components/HeroButton';
import { useEffect } from 'react';
import darkTheme from 'styles/darkTheme';

function MyApp({ Component, pageProps }: AppProps) {
	globalStyles();

	useEffect(() => {
		if (typeof document === 'undefined') return;
		document.body.className = darkTheme;
	}, []);

	return (
		<>
			<Appbar.Root>
				{({ ToggleMenuButton }) => (
					<>
						<div>
							<Logo height={20} />
							<ToggleMenuButton />
						</div>
						<div>
							<HeroButton medium tertiary tertiaryAlt>
								<span>About me</span>
							</HeroButton>
							<HeroButton medium tertiary tertiaryAlt>
								<span>Featured projects</span>
							</HeroButton>
						</div>
						<div>
							<HeroButton tertiary icon>
								<svg
									height='24'
									aria-hidden='true'
									viewBox='0 0 16 16'
									version='1.1'
									width='32'
								>
									<path
										fill-rule='evenodd'
										fill='currentColor'
										d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z'
									></path>
								</svg>
							</HeroButton>
						</div>
					</>
				)}
			</Appbar.Root>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
