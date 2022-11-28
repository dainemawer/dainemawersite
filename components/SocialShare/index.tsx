/*
 * SkipLink
 *
 * Site Main Content Skip Link
 *
 * @returns {JSX.Element}
*/

import styles from './SocialShare.module.css';

export default function SocialShare({ url, title, description }): JSX.Element {
	const path = process.env.NEXT_PUBLIC_SITE_DOMAIN + url;
	const query = `url=${path}&title=${title}&description=${description}&pubid=${process.env.NEXT_PUBLIC_ADDTHIS_API_KEY}`

	return (
		<ul className={styles.social}>
			<li><a className={styles.link} href={`http://api.addthis.com/oexchange/0.8/forward/facebook/offer?${query}`} rel="noreferrer" target="_blank">Facebook</a></li>
			<li><a className={styles.link} href={`http://api.addthis.com/oexchange/0.8/forward/twitter/offer?${query}`} rel="noreferrer" target="_blank">Twitter</a></li>
			<li><a className={styles.link} href={`http://api.addthis.com/oexchange/0.8/forward/linkedin/offer?${query}`} rel="noreferrer" target="_blank">LinkedIn</a></li>
		</ul>
	)
}
