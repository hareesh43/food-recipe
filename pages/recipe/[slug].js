import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "recipe" });

  const paths = res.items.map((item) => {
    return { params: { slug: item.fields.slug } };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "recipe",
    "fields.slug": params.slug,
  });

  return {
    props: {
      recipies: items[0],
      revalidate:1
    },
  };
}

export default function Details({ recipies }) {
  console.log(recipies);
  const {
    title,
    featureImage,
    method,
    ingridients,
    coockingTime,
  } = recipies.fields;
  return (
    <>
      <div className="banner">
        <Image
          src={"https:" + featureImage.fields.file.url}
          width={featureImage.fields.file.details.image.width}
          height="900px"
        />
        <h2>{title}</h2>

        <div className="info">
          <p>Take about {coockingTime} min to cook </p>
          <h3>Ingridients : </h3>
          {ingridients.map((ing) => (
            <span key={ing}>{ing}</span>
          ))}
        </div>

        <div className="method">{documentToReactComponents(method)}</div>
      </div>
      <style jsx>
        {`
          h2,
          h3 {
            text-tranform: uppercase;
          }
          banner h2 {
            margin: 0px;
            background: #fff;
            display: inline-block;
            padding: 20px;
            position: relative;
            top: -60px;
            left: -10px;
            transform: rotateZ(-1deg);
            box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.1);
          }

          .info p {
            margin: 0;
          }

          .info span::after {
            content: ", ";
          }

          .info span:last-chil::after {
            content: ".";
          }
        `}
      </style>
    </>
  );
}
