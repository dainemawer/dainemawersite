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
import { NextSeo } from 'next-seo';
import { getDocuments } from 'outstatic/server'

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

export default function Articles({ articles }: PostsProps): JSX.Element {
	return (
		<Layout>
			<NextSeo
				title="Articles"
			/>
			<Section title="All Articles">
				{articles.map((article) => (
					<Card key={article.slug} date={article.publishedAt} title={article.title} description={article.description} slug={article.slug} />
				))}
			</Section>
		</Layout>
	)
}

export const getServerSideProps = async () => {
	const params = ['title', 'publishedAt', 'description', 'coverImage', 'slug']
	const articles = getDocuments('articles', params)

	return {
		props: { articles }
	}
}
