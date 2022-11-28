/*
 * Home
 *
 * Homepage template for site application.
 *
 * @returns {JSX.Element}
*/

import { Section } from '@components/Section'
import Layout from '@components/Layout'
import { NextSeo } from 'next-seo';
import { getDocumentBySlug } from 'outstatic/server'
import convertToHTML from '@util/remark'

import styles from '@styles/Article.module.css';

export default function About({ page }): JSX.Element {
	return (
		<Layout>
			<NextSeo
				title="About"
			/>
			<Section title="About">
				<div className={styles.content} dangerouslySetInnerHTML={{ __html: page }} />
			</Section>
		</Layout>
	)
}

export const getServerSideProps = async () => {
	const page = getDocumentBySlug('pages', 'about', ['content'])
	const content = await convertToHTML(page.content || '')

	return {
		props: { page: content }
	}
}
