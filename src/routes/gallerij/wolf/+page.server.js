import downloadFiles from '$lib/downloadFiles';

// Query for the page
const query = 'https://jellema.cc/resources/images/wolf/wolf';

// The Data returned from the query
/** @type {import('$lib/types').PageServerLoad} */
export async function load() {
	try {
		const res = await downloadFiles(query, {}, fetch);
		return { res };
	} catch (error) {
		console.log(error);
	}
}
