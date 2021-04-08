import Link from "next/link";

export default function RecipeCard({ recipe }) {
  const { title, slug, cookingtime, thumbnail } = recipe.fields;
  return (
    <div className="card">
      {title}
      <div className="featured">{} </div>
      <div className="content">
        <div className="info">
          <h4>{title}</h4>
          <p>Cooking Takes apprx {cookingtime} mins</p>
        </div>
        <div className="actions">
          <Link href={`/recipe/${slug}`}>Cook this</Link>
        </div>
      </div>
    </div>
  );
}
