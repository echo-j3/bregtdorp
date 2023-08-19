import fetcher from '$lib/fetcher';
import slugify from 'slugify';

const query = `{
    repository(name: "bregtdorp", owner: "echo-j3") {
      id
      discussions(orderBy: {field: CREATED_AT, direction: DESC}, first: 100) {
        nodes {
          title
          number
		  createdAt
        }
      }
    }
  }`;

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	try {
		const res = await fetcher(query, {}, fetch);
		const {
			repository: {
				discussions: { nodes }
			}
		} = res;
		nodes.map((node) => {
			node.slug = slugify(node.title, { lower: true });
		});
		return { nodes };
	} catch (error) {
		console.log(error);
	}
}
