/*
 * Navigation
 *
 * Navigation Component
 *
 * @returns {JSX.Element}
*/

interface NavigationProps {
	id: string,
	label: string
}

import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from './Navigation.module.css'
import { classNames } from '@util/classes'

export default function Navigation({ id, label }: NavigationProps): JSX.Element {
	const router = useRouter();


	return (
		<nav className="site-navigation" id={id} role="navigation" aria-label={label}>
			<ul className={styles.list}>
				<li><Link className={`${styles.link} ${router.pathname == "/" && styles.active}`} href="/">Home</Link></li>
				<li><Link className={`${styles.link} ${router.pathname == "/about" && styles.active}`} href="/about">About</Link></li>
				<li><Link className={`${styles.link} ${router.pathname == "/articles" && styles.active}`} href="/articles">Articles</Link></li>
				<li><Link className={`${styles.link} ${router.pathname == "/contact" && styles.active}`} href="/contact">Contact</Link></li>
			</ul>
		</nav>
	)
}
