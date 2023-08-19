import { GITHUB_API_KEY } from '$env/static/private';

const fetcher = async (query, variables, fetch) => {
	try {
		const res = await fetch('https://api.github.com/graphql', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `bearer ${GITHUB_API_KEY}`
			},
			body: JSON.stringify({ query, variables })
		});
		const { data } = await res.json();
		return data;
	} catch (error) {
		console.log(error);
		throw error;
	}
};

export default fetcher;
