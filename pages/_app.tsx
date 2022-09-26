import type { AppProps } from 'next/app';
import * as Appbar from 'components/Appbar';
import Head from 'next/head';
import globalStyles from 'styles/globalStyles';
import Logo from 'components/Logo';

function MyApp({ Component, pageProps }: AppProps) {
	globalStyles();
	
	return (
		<>
			<Appbar.Root>
				<Logo height={20} />
			</Appbar.Root>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
