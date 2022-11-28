import Link from 'next/link'
import styles from './Card.module.css'
import { formatDate } from '@util/date'
import { classNames } from '@util/classes'

interface CardProps {
	date: string
	title: string
	description: string
	slug: string
	lead?: boolean
}

export const Card = ({ date, title, description, slug, lead }: CardProps) => {

	const classes = classNames(
		styles.card,
		lead && styles.lead
	);

	return (
		<article aria-label={title} id={`post-${slug}`} className={classes}>
			<time dateTime={date} className={styles.date}>
				<span className={styles.time}>{formatDate(date)}</span>
			</time>
			<h3 className={styles.title}>
				<Link className={styles.anchor} href={`/articles/${slug}`}>{title}</Link>
			</h3>
			<p className={styles.description}>
				{description}
			</p>
		</article>
	)
}
