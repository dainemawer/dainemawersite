/*
 * Custom Document
 *
 * A custom Document can update
 * the <html> and <body> tags used to render a Page.
 *
 * @see https://nextjs.org/docs/advanced-features/custom-document
 * @returns {JSX.Element}
*/

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document(): JSX.Element {
	return (
		<Html lang="en">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="true"
				/>
				<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=DM+Serif+Display&display=swap" rel="stylesheet" />
			</Head>
			<body className="site-name">
				<Main />
				<NextScript />

				{/* Support for window.gtag on the server */}
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
						`,
					}}
				/>
			</body>
		</Html>
	)
}
