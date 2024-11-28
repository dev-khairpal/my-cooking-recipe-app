import { Link } from "react-router-dom"

export default function RecipeList({recipes}) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes && recipes.map((recipe) => (
    <div key={recipe.id} className="m-4">
      <img src={recipe.image} alt="img" className="w-60" />
      <h2 className="text-xl">{recipe.title}</h2>
      <p>{recipe.cookingTime}</p>
      <div>{recipe.method.substring(0,100)}</div>
      <Link className="inline-block bg-orange-600 p-2 rounded-md" to={`/recipes/${recipe.id}`}>Cook Recipe</Link>
    </div>
  ))}
    </div>
  )
}
