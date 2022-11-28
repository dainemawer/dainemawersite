export const formatDate = (date) => {
	const d = new Date(date);

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	return d.toLocaleDateString('en-US', options);
}
