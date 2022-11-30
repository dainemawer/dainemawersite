import { useState, useEffect } from 'react'

import styles from './TableOfContents.module.css'

const TableOfContents = () => {
	const [headings, setHeadings] = useState([]);

	useEffect(() => {
		const tags = document.querySelectorAll('h2, h3');

		tags.length > 0 && tags.forEach((tag: HTMLElement, index: number) => {
			tag.setAttribute('id', `heading-${index}`);
		})

		const elements = tags && Array.from(tags)
			.map((elem: HTMLElement, index: number) => ({
				id: `heading-${index}`,
				text: elem.innerText,
			}))

		setHeadings(elements)

	}, []);

	return (
		<nav aria-label="Article Table of Contents" className={styles.toc}>
			<h4 className={styles.title}>Table of Contents</h4>
			<ul className={styles.list}>
				{headings && headings.map(heading => (
					<li className={styles.item} key={heading.id}>
						<a className={styles.anchor} href={`#${heading.id}`}>{heading.text}</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default TableOfContents;
