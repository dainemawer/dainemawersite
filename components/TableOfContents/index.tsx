import { useState, useEffect } from 'react'
import styles from './TableOfContents.module.css'

const TableOfContents = ({ title }) => {
	const [headings, setHeadings] = useState([])

	useEffect(() => {
		const elements = Array.from(document.querySelectorAll('h3'))
			.map((elem: HTMLElement) => ({
				id: elem.innerText.toLowerCase().replace(/ /g, "-"),
				text: elem.innerText,
			}))
		setHeadings(elements)
	}, []);

	return (
		<nav aria-label={`${title} - Quick Links Navigation`} className={styles.toc}>
			<h2 className={styles.tocTitle}>Table of Contents <span className="sr-only">for {title}</span></h2>
			<ol className={styles.list}>
				{headings.map((heading) => (
					<li className={styles.item} key={heading.id}>
						<a className={styles.anchor} href={`#${heading.id}`}>{heading.text}</a>
					</li>
				))}
			</ol>
		</nav>
	)
}

export default TableOfContents;
