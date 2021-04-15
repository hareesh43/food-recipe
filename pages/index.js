import { createClient } from "contentful";
import RecipeCard from "../componets/RecipeCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipies: res.items,
      revalidate:1
    },
  };
}

export default function Home({ recipies }) {
  // console.log(recipies);
  return (
    <div className="recipe-list">
      {recipies.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
      <style jsx>
        {`
        .recipe-list{
          display:grid;
          grid-template-columns: 1fr 1fr !important;
          grid-gap:20px
        }
        
        `}
      </style>
    </div>
  );
}
