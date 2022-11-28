/*
 * Header
 *
 * Global Site Header
 *
 * @returns {JSX.Element}
*/

import { Logo } from '@components/Logo'
import Image from 'next/image'
import Navigation from '@components/Navigation'
import styles from './Header.module.css'

export default function Header(): JSX.Element {
	return (
		<header className={styles.header} id="site-header" role="banner" aria-label="Site Header">
			<Image className={styles.image} src="/avatar.jpg" width="63" height="63" alt="Daine Mawer" />
			<Logo />
			<Navigation id="site-navigation" label="Site Navigation" />
		</header>
	)
}
