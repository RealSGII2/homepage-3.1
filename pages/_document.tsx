import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en-US">
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='crossOrigin'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,500;0,700;1,400;1,700&family=Outfit:wght@500&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
