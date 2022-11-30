import { useState, useEffect } from 'react'

import styles from './TableOfContents.module.css'

const TableOfContents = () => {
	const [headings, setHeadings] = useState([]);

	useEffect(() => {
		const tags = document.querySelectorAll('h2, h3');
		const elements = Array.from(tags) as HTMLElement[];

		elements.map(
			(elem) => ({
				text: elem.innerText,
			})
		);

		setHeadings(elements)
	}, [headings])

	return (
		<nav aria-label="Article Table of Contents" className={styles.toc}>
			<ul>
				{headings && headings.map(heading => (
					<li key={heading.id}>
						<a href={`#${heading.id}`}>{heading.text}</a>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default TableOfContents;
