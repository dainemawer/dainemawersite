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
import { useForm } from "react-hook-form";
import { useState } from 'react';

import styles from '@styles/Contact.module.css';

export default function Contact({ page }): JSX.Element {
	const [submitted, setSubmitted] = useState('Submit');
	const { register, reset, handleSubmit, formState: { errors, isSubmitting } } = useForm();

	const onSubmit = data => {
		return new Promise<string>(resolve => {
			setTimeout(() => {
				resolve('Resolved!');

				if (data.honeypot.length > 0) {
					return false;
				}

				const body = {
					to: 'hello@dainemawer.com',
					from: data.email,
					name: data.name,
					message: data.message,
					subject: `⚡️ thelazyload | Form submission`,
					text_body: `Hey Daine, you have a new submission from thelazyload.com.\n\n${data.message}`,
					html_body: `<p>Hey Daine, you have a new submission from thelazyload.com.</p>\n\n<p>From: ${data.name} - ${data.email}</p>\n\n<p>Message: ${data.message}</p>`,
				};

				fetch('/api/mail', {
					method: 'POST',
					body: JSON.stringify(body),
					headers: {
						'Content-Type': 'application/json'
					}
				})
					.then(res => res.json())
					.then(response => {
						response.message === 'success' ? setSubmitted('Success') : setSubmitted('Error');
						setTimeout(() => {
							reset();
							setSubmitted('Submit');
						}, 2500)
					})
					.catch(error => console.log('Error', error));
			}, 2000);
		});
	};

	return (
		<Layout>
			<NextSeo
				title="Contact"
			/>
			<Section title="Contact">
				<div className={styles.content} dangerouslySetInnerHTML={{ __html: page }} />
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.group}>
						<label htmlFor="">
							<span className={styles.label}>Name</span>
							<input className={styles.input} type="text" placeholder="Name" {...register("name", { required: true })} />
							<small className={styles.error}>{errors.name && <span>This field is required</span>}</small>
						</label>
					</div>
					<div className={styles.group}>
						<label htmlFor="">
							<span className={styles.label}>Email</span>
							<input className={styles.input} type="email" placeholder="mail@domain.com" {...register("email", { required: true, validate: (value) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) })} />
							<small className={styles.error}>{errors.email && <span>This field is required</span>}</small>
						</label>
					</div>
					<div className={styles.group}>
						<label htmlFor="">
							<span className={styles.label}>Message</span>
							<textarea className={styles.input}  placeholder="Message" rows={10} {...register("message", { required: true })}>
							</textarea>
							<small className={styles.error}>{errors.message && <span>This field is required</span>}</small>
						</label>
					</div>
					<input hidden type="text" {...register('honeypot')} />
					<button className={styles.button} type="submit">
						{isSubmitting ? "Submitting..." : submitted}
					</button>
				</form>
			</Section>
		</Layout>
	)
}

export const getServerSideProps = async () => {
	const page = getDocumentBySlug('pages', 'contact', ['content'])
	const content = await convertToHTML(page.content || '')

	return {
		props: { page: content }
	}
}
