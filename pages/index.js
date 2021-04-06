import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipies: res.items,
    },
  };
}

export default function Home({ recipies }) {
  console.log(recipies);
  return <div>Recipes List</div>;
}
