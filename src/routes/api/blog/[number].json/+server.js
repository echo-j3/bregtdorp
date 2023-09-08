import fetcher from "$lib/fetcher";
import { json } from "@sveltejs/kit";

const query = `query GetDiscussion($number: Int = 100) {
    repository(name: "kennel", owner: "quennvonkatum") {
      discussion(number: $number) {
        bodyHTML
        title
        createdAt
      }
    }
  }`;

export const GET = async ({ params: { number }, fetch, setHeaders }) => {
  const variables = { number: parseInt(number) };
  try {
    const {
      repository: { discussion },
    } = await fetcher(query, variables, fetch);

    setHeaders({
      "Cache-Control": "max-age=600",
    });

    return json(discussion);
  } catch (error) {
    console.log(error);
  }
};
