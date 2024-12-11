import { Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";

export default function RecipeList({ recipes }) {
  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();
  };

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-4">
      {recipes &&
        recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="flex flex-col justify-between border shadow-lg rounded-lg overflow-hidden bg-white dark:bg-neutral-800 transition-all hover:shadow-xl"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold text-orange-600 mb-2">
                {recipe.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {recipe.cookingTime}
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                {recipe.method.substring(0, 100)}...
              </p>
            </div>
            <div className="flex items-center justify-between bg-gray-100 dark:bg-neutral-700 p-4">
              <Link
                className="inline-block text-sm font-medium bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition"
                to={`/recipes/${recipe.id}`}
              >
                Cook Recipe
              </Link>
              <img
                onClick={() => handleClick(recipe.id)}
                className="cursor-pointer w-8 h-8 hover:bg-gray-200 dark:hover:bg-gray-600 p-1 rounded-full transition"
                src="delete.svg"
                alt="delete"
              />
            </div>
          </div>
        ))}
    </div>
  );
}
