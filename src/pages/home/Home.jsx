import RecipeList from "../../components/RecipeList";
import { useFetch } from "../../hooks/useFetch";

export default function Home() {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <p>Loading....</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
