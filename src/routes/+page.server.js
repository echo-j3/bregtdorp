import fetcher from "$lib/fetcher";
import slugify from "slugify";

// Query for the page
const query = `query MyQuery {
	repository(name: "kennel", owner: "quennvonkatum") {
	  discussions(first: 4, orderBy: {field: CREATED_AT, direction: DESC}) {
		nodes {
		  createdAt
		  title
		  number
		}
	  }
	}
  }`;

// The Data returned from the query
/** @type {import('./$types').PageServerLoad} */
export async function load() {
  try {
    const res = await fetcher(query, {}, fetch);
    const {
      repository: {
        discussions: { nodes },
      },
    } = res;
    nodes.map((node) => {
      node.slug = slugify(node.title, { lower: true });
    });

    return { nodes };
  } catch (error) {
    console.log(error);
  }
}
