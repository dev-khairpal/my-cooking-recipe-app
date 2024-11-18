import { Link } from "react-router-dom"

export default function RecipeList({recipes}) {
  return (
    <div>
        {recipes && recipes.map((recipe) => (
    <div key={recipe.id} className="">
      <img src={recipe.image} alt="img" className="w-60" />
      <h2 className="text-xl">{recipe.title}</h2>
      <p>{recipe.cookingTime}</p>
      <div>{recipe.method.substring(0,100)}</div>
      <Link to={`/recipes/${recipe.id}`}>Cook Recipe</Link>
    </div>
  ))}
    </div>
  )
}
