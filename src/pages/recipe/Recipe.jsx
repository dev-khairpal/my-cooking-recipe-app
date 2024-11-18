import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;

  const { error, isPending, data: recipe } = useFetch(url);

  return (
    <div>
      {error && <p>{error}</p>}
      {isPending && <p>Loading....</p>}
      {recipe && <div>
      <img src={recipe.image} alt="img" />
        <h2>{recipe.title}</h2>
        <p>Takes {recipe.cookingTime}</p>
        <ul className="flex gap-4 ">
          {recipe.ingredients.map(ing=>(
            <li className="bg-amber-300 px-2 rounded-md text-red-600" key={id}>{ing}</li>
          ))}
        </ul>
        <p>{recipe.method}</p>
      </div>}
    </div>
  );
}
