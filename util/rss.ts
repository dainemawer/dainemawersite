import RSS from 'rss';
import fs from 'fs';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '../next-seo.config';
import { getDocuments } from 'outstatic/server'

export default async function generateRSSFeed() {
	const params = ['title', 'publishedAt', 'description', 'coverImage', 'slug']
	const articles = getDocuments('articles', params);

	const feedOptions = {
		title: `${SITE_TITLE} | RSS Feed`,
		description: SITE_DESCRIPTION,
		site_url: SITE_URL,
		feed_url: `${SITE_URL}/rss.xml`,
		image_url: `${SITE_URL}/logo.png`,
		pubDate: new Date(),
		copyright: `All rights reserved ${new Date().getFullYear()}, Daine Mawer`,
	};

	const feed = new RSS(feedOptions);

	articles.map((article) => {
		feed.item({
			title: article.title,
			description: article.description,
			url: `${SITE_TITLE}/articles/${article.slug}`,
			date: article.publishedAt,
		});
	});

	fs.writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
}
