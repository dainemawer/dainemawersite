/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { Card } from '@components/Card'
import { Section } from '@components/Section'
import Layout from '@components/Layout'
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import { getDocuments } from 'outstatic/server'
import generateRSSFeed from '@util/rss'

interface PostsProps {
	articles: {
		description: string
		coverImage: string
		title: string
		slug: string
		publishedAt: string
		status: string
	}[]
}

export default function Home({ articles }: PostsProps): JSX.Element {
	const recent = articles.slice(1, 4);
	const latest = articles[0];

	const SEO = (
		<>
			<NextSeo
				title="Home"
			/>
			<SocialProfileJsonLd
				type="Person"
				name="Daine Mawer"
				url="http://dainemawer.com"
				sameAs={[
					'https://www.linkedin.com/in/dainemawer',
				]}
			/>
		</>
	);

	return (
		<Layout>
			{SEO}
			<Section>
				<Card date={latest?.publishedAt} title={latest?.title} description={latest?.description} slug={latest?.slug} lead />
			</Section>
			{recent.length > 0 && (
				<Section title="Recent">
					{recent.map((article) => (
						<Card key={article?.slug} date={article?.publishedAt} title={article?.title} description={article?.description} slug={article?.slug} />
					))}
				</Section>
			)}
		</Layout>
	)
}

export const getStaticProps = async () => {
	const params = ['title', 'publishedAt', 'description', 'coverImage', 'slug']
	const articles = getDocuments('articles', params)

	generateRSSFeed();

	return {
		props: { articles }
	}
}
