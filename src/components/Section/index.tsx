import styles from './Section.module.css'

interface SectionProps {
	children: React.ReactNode
	title?: string
}

export const Section = ({ children, title }: SectionProps) => {
	return (
		<section aria-label={title} className={styles.section}>
			{title && (<header className={styles.header}>
				<h2 className={styles.title}>{title}</h2>
			</header>)}
			{children}
		</section>
	)
}
